import styled from '@emotion/styled';
import { Button } from '~/components/Button';

export const ActionButtons: React.FC = () => {
  return (
    <StyledButtons>
      <Button>생성</Button>
      <Button>취소</Button>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
