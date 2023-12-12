import styled from '@emotion/styled';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { SearchLocationModal } from '~/components/SearchLocationModal';
import { useModal } from '~/hooks/useModal';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Location: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    location,
    updateLocation,
    changeRoadNameAddress,
    changeLotNumberAddress,
  } = usePostVenueFormStore(
    ({
      location,
      updateLocation,
      changeRoadNameAddress,
      changeLotNumberAddress,
    }) => ({
      location,
      updateLocation,
      changeRoadNameAddress,
      changeLotNumberAddress,
    }),
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

        <SearchLocationModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          updateLocation={updateLocation}
        />
      </StyledFlexContainer>
      <Input
        value={location?.roadNameAddress ?? ''}
        onChange={({ target }) => changeRoadNameAddress(target.value)}
      />

      <label>지번</label>
      <Input
        value={location?.lotNumberAddress ?? ''}
        onChange={({ target }) => changeLotNumberAddress(target.value)}
      />

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
