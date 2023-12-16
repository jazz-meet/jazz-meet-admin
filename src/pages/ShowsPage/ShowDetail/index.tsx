import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShow } from '~/apis/shows';
import { ShowDetailType } from '~/types/api.types';
import { DetailContent } from './DetailContent';
import { DetailInput } from './DetailInput';

export const ShowDetail: React.FC = () => {
  const { showId } = useParams();

  const [showDetailData, setShowDetailData] = useState<ShowDetailType | null>(
    null,
  );
  const [isEditMode, setIsEditMode] = useState(false);

  const onEdit = () => {
    setIsEditMode(true);
  };

  const closePost = () => {
    setIsEditMode(false);
  };

  const setNewData = (newData: ShowDetailType) => {
    setShowDetailData(newData);
  };

  useEffect(() => {
    (async () => {
      const inquiryList = await getShow(Number(showId));

      setShowDetailData(inquiryList);
    })();
  }, [showId]);

  return (
    <StyledShowDetailPage>
      {showDetailData ? (
        <>
          {isEditMode ? (
            <DetailInput
              showDetailData={showDetailData}
              closePost={closePost}
              setNewData={setNewData}
            />
          ) : (
            <DetailContent showDetailData={showDetailData} onEdit={onEdit} />
          )}
        </>
      ) : (
        <div>로딩중</div>
      )}
    </StyledShowDetailPage>
  );
};

const StyledShowDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 40px;
`;
