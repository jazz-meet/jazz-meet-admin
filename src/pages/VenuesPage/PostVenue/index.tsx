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
  const isEdit = !!venueId;

  useEffect(() => {
    if (venueId) {
      initializeEditForm(venueId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPostVenue>
      <StyledHeader>{`공연장 > 공연장 ${
        isEdit ? '수정' : '생성'
      }`}</StyledHeader>
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
