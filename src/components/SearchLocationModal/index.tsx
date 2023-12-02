import styled from '@emotion/styled';
import { getGeoLocation } from '~/apis/geoLocation';
import { VenueLocationProps } from '~/pages/VenuesPage/PostVenue/PostVenueForm/VenueLocation';

type Props = {
  closeModal: () => void;
  updateLocation: (location: VenueLocationProps) => void;
};

export const SearchLocationModal: React.FC<Props> = () => {
  // const [geoLocation, setGeoLocation] = useState();
  // TODO: 네이버지도 검색 API 사용 예정, 도로명주소, 지번, 좌표값 받아오기

  const onSearchFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const word = formData.get(SEARCH_WORD)?.toString().trim();

    if (!word) {
      alert('검색어를 입력해주세요.');
      return;
    }

    const response = await getGeoLocation(word);
    console.log(response);
  };

  return (
    <StyledSearchLocationModal>
      <StyledSearchForm onSubmit={onSearchFormSubmit}>
        <label>주소검색 | </label>
        <StyledInput name={SEARCH_WORD} />
      </StyledSearchForm>
    </StyledSearchLocationModal>
  );
};

const SEARCH_WORD = 'search-word';

const StyledSearchLocationModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 10px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSearchForm = styled.form`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
`;
