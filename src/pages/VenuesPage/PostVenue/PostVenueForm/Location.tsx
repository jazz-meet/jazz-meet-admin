import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { SearchLocationModal } from '~/components/SearchLocationModal';
import { useModal } from '~/hooks/useModal';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Location: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { location, updateLocation } = usePostVenueFormStore(
    ({ location, updateLocation }) => ({ location, updateLocation }),
  );

  return (
    <>
      <StyledFlexContainer>
        <label>도로명 주소</label>
        <Button
          onClick={(event) => {
            event.preventDefault();
            openModal();
          }}
        >
          주소 검색
        </Button>
        {isModalOpen &&
          createPortal(
            <SearchLocationModal
              closeModal={closeModal}
              updateLocation={updateLocation}
            />,
            document.body,
          )}
      </StyledFlexContainer>
      <Input disabled value={location?.roadNameAddress ?? ''} />

      <label>지번</label>
      <Input disabled value={location?.lotNumberAddress ?? ''} />

      <label>공연장 좌표</label>
      <Input
        disabled
        value={
          location?.latitude
            ? `lat: ${location.latitude}, lng: ${location.longitude}`
            : ''
        }
      />
    </>
  );
};

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
