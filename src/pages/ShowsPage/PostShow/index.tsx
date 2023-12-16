import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { PATH } from '~/constants/path';
import { DetailInput } from '../ShowDetail/DetailInput';

export const PostShow: React.FC = () => {
  const navigate = useNavigate();

  const closePost = () => {
    navigate(`${PATH.SHOWS}`);
  };

  return (
    <StyledShowDetailPage>
      <DetailInput closePost={closePost} />
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
