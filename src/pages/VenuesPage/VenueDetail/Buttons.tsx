import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { deleteVenue } from '~/apis/venue';
import { Button } from '~/components/Button';
import { confirmDelete } from '~/utils/common';

type Props = {
  venueId: string;
  venueName: string;
};

export const Buttons: React.FC<Props> = ({ venueId, venueName }) => {
  const navigate = useNavigate();

  return (
    <StyledButtons>
      <Link to={`/venues/edit/${venueId}`}>
        <Button>수정</Button>
      </Link>
      <Button
        onClick={() => {
          confirmDelete(
            `정말 삭제하시겠습니까? 삭제하시려면 "${venueName}"을(를) 입력해주세요.`,
            venueName,
            async () => {
              const response = await deleteVenue(venueId);
              if (response.ok) {
                alert('삭제되었습니다.');
                navigate('/venues');
              } else {
                alert('삭제에 실패했습니다.');
              }
            },
            () => alert('삭제요청이 취소되었습니다.'),
          );
        }}
      >
        삭제
      </Button>
      <Link to="/venues">
        <Button>목록</Button>
      </Link>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
`;
