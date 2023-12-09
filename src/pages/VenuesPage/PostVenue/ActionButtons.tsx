import styled from '@emotion/styled';
import { Button } from '~/components/Button';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const ActionButtons: React.FC = () => {
  const { onVenuePost } = usePostVenueFormStore((state) => ({
    onVenuePost: state.onVenuePost,
  }));

  return (
    <StyledButtons>
      <Button onClick={onVenuePost}>생성</Button>
      <Button>취소</Button>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
