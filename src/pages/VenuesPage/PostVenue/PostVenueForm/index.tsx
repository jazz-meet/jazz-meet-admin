import styled from '@emotion/styled';
import { Button } from '~/components/Button';
import { VenueDescription } from './VenueDescription';
import { VenueExternalLinks } from './VenueExternalLinks';
import { VenueHours } from './VenueHours';
import { VenueImages } from './VenueImages';
import { VenueLocation } from './VenueLocation';
import { VenueName } from './VenueName';
import { VenuePhoneNumber } from './VenuePhoneNumber';

export const PostVenueForm: React.FC = () => {
  return (
    <StyledPostVenueForm>
      <VenueName />
      <VenueImages />
      <VenueLocation />
      <VenuePhoneNumber />
      <VenueExternalLinks />
      <VenueHours />
      <VenueDescription />
      <StyledButtons>
        <Button>생성</Button>
        <Button>취소</Button>
      </StyledButtons>
    </StyledPostVenueForm>
  );
};

const StyledPostVenueForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
