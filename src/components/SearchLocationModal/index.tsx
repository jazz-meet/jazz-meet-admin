import styled from '@emotion/styled';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getGeoLocation } from '~/apis/geoLocation';
import { BaseDialog } from '~/layouts/BaseLayout/BaseDialog';
import { clickableStyle } from '~/styles/common';
import { GeoLocation, LocationType } from '~/types/api.types';
import { Button } from '../Button';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;

  updateLocation: (location: LocationType) => void;
};

export const SearchLocationModal: React.FC<Props> = ({
  isModalOpen,
  closeModal,
  updateLocation,
}) => {
  const [searchWord, setSearchWord] = useState('');
  const [geoLocation, setGeoLocation] = useState<GeoLocation>();

  const onSearchFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const trimmedSearchWord = searchWord.trim();

    if (!trimmedSearchWord) {
      alert('검색어를 입력해주세요.');
      return;
    }

    const geoLocation = await getGeoLocation(trimmedSearchWord);

    setGeoLocation(geoLocation);
  };

  return (
    <BaseDialog isOpen={isModalOpen} onClose={closeModal}>
      <StyledSearchForm onSubmit={onSearchFormSubmit}>
        <label>주소검색 | </label>
        <StyledInput
          id={SEARCH_WORD}
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
        />

        <ClearIcon onClick={() => setSearchWord('')} />
        <button>
          <SearchIcon />
        </button>
      </StyledSearchForm>

      <StyledSearchResult>
        <StyledAddressContainer>
          {geoLocation &&
            geoLocation.addresses.length > 0 &&
            geoLocation.addresses.map((address) => (
              <StyledAddress
                key={address.roadNameAddress}
                onClick={() => {
                  updateLocation(address);
                  closeModal();
                }}
              >
                <div>도로명</div>
                <div>{address.roadNameAddress}</div>
                <div>지번</div>
                <div>{address.lotNumberAddress}</div>
              </StyledAddress>
            ))}
        </StyledAddressContainer>
      </StyledSearchResult>
    </BaseDialog>
  );
};

const SEARCH_WORD = 'search-word';

const StyledSearchForm = styled.form`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
  gap: 10px;

  > label {
    white-space: nowrap;
  }

  svg {
    ${clickableStyle};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
`;

const StyledAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const StyledAddress = styled(Button)`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div:nth-of-type(1),
  > div:nth-of-type(3) {
    font-weight: bold;
  }
`;

const StyledSearchResult = styled.div`
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
