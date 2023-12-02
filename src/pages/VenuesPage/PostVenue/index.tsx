import styled from '@emotion/styled';
import { PostVenueForm } from './PostVenueForm';

export const PostVenue: React.FC = () => {
  return (
    <StyledPostVenue>
      <StyledHeader>{`공연장 > 공연장 생성`}</StyledHeader>
      <PostVenueForm />
    </StyledPostVenue>
  );
};

const StyledPostVenue = styled.div`
  width: 100%;
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #000000;
  font-size: 24px;
  padding: 20px;
`;
