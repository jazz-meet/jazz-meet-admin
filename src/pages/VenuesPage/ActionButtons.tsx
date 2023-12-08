import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '~/components/Button';
import { PATH } from '~/constants/path';

export const ActionButtons: React.FC = () => {
  return (
    <StyledButtons>
      <Link to={PATH.VENUES_POST}>
        <Button>공연장 생성</Button>
      </Link>
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
`;
