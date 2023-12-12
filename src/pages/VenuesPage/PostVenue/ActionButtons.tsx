import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { deleteVenue } from '~/apis/venue';
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

  const onVenueDeleteClick = (venueId: string) => {
    const result = prompt(`정말로 삭제하시려면 '삭제'라고 입력해주세요.`);

    if (result === '삭제') {
      onVenueDelete(venueId);
    } else {
      alert('삭제요청이 취소되었습니다.');
    }
  };

  const onVenueDelete = (venueId: string) => {
    (async () => {
      const { ok } = await deleteVenue(venueId);

      if (ok) {
        alert(`성공적으로 삭제되었습니다.`);
        navigate(`/venues`);
      } else {
        alert(`삭제에 실패했습니다.`);
      }
    })();
  };

  return (
    <StyledButtons>
      <Button onClick={onClick}>{isEdit ? '수정' : '생성'}</Button>
      <Button>취소</Button>
      {isEdit && (
        <Button onClick={() => onVenueDeleteClick(venueId)}>
          해당 공연장 삭제
        </Button>
      )}
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
