import styled from '@emotion/styled';
import { ActionButtons } from './ActionButtons';
import { Description } from './Description';
import { Hours } from './Hours';
import { Images } from './Images';
import { Location } from './Location';
import { Name } from './Name';
import { PhoneNumber } from './PhoneNumber';
import { ExternalLinks } from './VenueExternalLinks';
import { usePostVenueFormStore } from './usePostVenueFormStore';

type Props = {
  venueId?: string;
};

export const PostVenueForm: React.FC<Props> = () => {
  const {
    name,
    location,
    phoneNumber,
    getImageIds,
    venueHours,
    description,
    getLinks,
  } = usePostVenueFormStore((state) => ({
    name: state.name,
    location: state.location,
    phoneNumber: state.phoneNumber,
    getImageIds: state.getImageIds,
    venueHours: state.venueHours,
    description: state.description,
    getLinks: state.getLinks,
  }));

  const onPostVenueSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postVenueBody = {
      name,
      imageIds: getImageIds(),
      roadNameAddress: location?.roadNameAddress,
      lotNumberAddress: location?.lotNumberAddress,
      phoneNumber,
      description,
      links: getLinks(),
      venueHours,
      latitude: location?.latitude,
      longitude: location?.longitude,
    };
    console.log(postVenueBody);

    // postVenue(postVenueBody);
  };

  return (
    <StyledPostVenueForm onSubmit={onPostVenueSubmit}>
      <Name />
      <Images />
      <Location />
      <PhoneNumber />
      <ExternalLinks />
      <Hours />
      <Description />
      <ActionButtons />
    </StyledPostVenueForm>
  );
};

const StyledPostVenueForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
