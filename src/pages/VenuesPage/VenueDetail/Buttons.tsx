import styled from '@emotion/styled';
import { Button } from '~/components/Button';

export const Buttons: React.FC = () => {
  return (
    <StyledButtons>
      <Button>수정</Button>
      <Button>삭제</Button>
      <Button>목록</Button>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
`;
