import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

export const PostVenue: React.FC<Props> = () => {
  const { initializeEditForm } = usePostVenueFormStore((state) => ({
    initializeEditForm: state.initializeEditForm,
  }));
  const { venueId } = useParams();

  useEffect(() => {
    if (venueId) {
      initializeEditForm(venueId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPostVenue>
      <Name />
      <Images />
      <Location />
      <PhoneNumber />
      <ExternalLinks />
      <Hours />
      <Description />
      <ActionButtons venueId={venueId} />
    </StyledPostVenue>
  );
};

const StyledPostVenue = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
