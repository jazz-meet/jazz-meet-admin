import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostVenueForm } from './PostVenueForm';
import { usePostVenueFormStore } from './PostVenueForm/usePostVenueFormStore';

export const PostVenue: React.FC = () => {
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
      <PostVenueForm />
    </StyledPostVenue>
  );
};

const StyledPostVenue = styled.div`
  width: 100%;
`;
