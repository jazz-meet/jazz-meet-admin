import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { usePostVenueFormStore } from './usePostVenueFormStore';

type Props = {
  venueId?: string;
};

export const ActionButtons: React.FC<Props> = ({ venueId }) => {
  const { onVenuePost, onVenueEdit } = usePostVenueFormStore((state) => ({
    onVenuePost: state.onVenuePost,
    onVenueEdit: state.onVenueEdit,
  }));
  const navigate = useNavigate();

  const isEdit = !!venueId;

  const onClick = () => {
    (async () => {
      const data = isEdit ? await onVenueEdit(venueId) : await onVenuePost();

      if (data?.id) {
        alert(`성공적으로 ${isEdit ? '수정' : '생성'}되었습니다.`);
        navigate(`/venues/edit/${venueId}`);
      }
    })();
  };

  return (
    <StyledButtons>
      <Button onClick={onClick}>생성</Button>
      <Button>취소</Button>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
