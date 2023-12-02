import styled from '@emotion/styled';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { SearchLocationModal } from '~/components/SearchLocationModal';
import { useModal } from '~/hooks/useModal';

export type VenueLocationProps = {
  roadNameAddress: string;
  lotNumberAddress: string;
  latitude: string;
  longitude: string;
};

export const VenueLocation: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [location, setLocation] = useState<VenueLocationProps>({
    roadNameAddress: '',
    lotNumberAddress: '',
    latitude: '',
    longitude: '',
  });

  const updateLocation = ({
    roadNameAddress,
    lotNumberAddress,
    latitude,
    longitude,
  }: VenueLocationProps) => {
    setLocation({
      roadNameAddress,
      lotNumberAddress,
      latitude,
      longitude,
    });
  };

  return (
    <>
      <StyledFlexContainer>
        <label htmlFor="venue-name">도로명 주소</label>
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
      <Input disabled value={location.roadNameAddress} />

      <label htmlFor="venue-name">지번</label>
      <Input disabled value={location.lotNumberAddress} />

      <label htmlFor="venue-name">공연장 좌표</label>
      <Input
        disabled
        value={
          location.latitude
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
