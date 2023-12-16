import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowDetail } from '~/apis/shows';
import { ShowDetailType } from '~/types/api.types';
import { DetailContent } from './DetailContent';
import { DetailInput } from './DetailInput';

export const ShowDetail: React.FC = () => {
  const { showId } = useParams();

  const [showDetailData, setShowDetailData] = useState<ShowDetailType | null>(
    null,
  );
  const [isEditMode, setIsEditMode] = useState(false);

  const getShow = useCallback(async () => {
    const inquiryList = await getShowDetail(Number(showId));

    setShowDetailData(inquiryList);
  }, [showId]);

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
    getShow();
  }, [getShow]);

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
