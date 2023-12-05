import styled from '@emotion/styled';
import { EXTERNAL_LINKS } from '~/constants/externalLinks';
import { POST_VENUE_NAMES } from '../../../../constants/formNames';
import { ActionButtons } from './ActionButtons';
import { Description } from './Description';
import { Hours } from './Hours';
import { Images } from './Images';
import { Location } from './Location';
import { Name } from './Name';
import { PhoneNumber } from './PhoneNumber';
import { ExternalLinks } from './VenueExternalLinks';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const PostVenueForm: React.FC = () => {
  const { location, getImageIds } = usePostVenueFormStore(
    ({ location, getImageIds }) => ({
      location,
      getImageIds,
    }),
  );

  const onPostVenueSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get(POST_VENUE_NAMES.NAME);
    const imageIds = getImageIds();
    const phoneNumber = formData
      .getAll(POST_VENUE_NAMES.PHONE_NUMBER)
      .join('-');

    const links = Object.entries(EXTERNAL_LINKS)
      .map(([key, { type }]) => {
        const url = formData.get(POST_VENUE_NAMES.EXTERNAL_LINKS + type);
        if (!url) {
          return;
        }

        return { type: key, url };
      })
      .filter(Boolean);

    const venueHours = formData.get(POST_VENUE_NAMES.VENUE_HOURS);
    const description = formData.get(POST_VENUE_NAMES.DESCRIPTION);

    const postVenueBody = {
      name,
      imageIds,
      roadNameAddress: location?.roadNameAddress,
      lotNumberAddress: location?.lotNumberAddress,
      phoneNumber,
      description,
      links,
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
