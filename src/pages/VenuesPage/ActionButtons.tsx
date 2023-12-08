import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '~/components/Button';

export const ActionButtons: React.FC = () => {
  return (
    <StyledButtons>
      <Link to={'./post'}>
        <Button>공연장 생성</Button>
      </Link>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
`;
