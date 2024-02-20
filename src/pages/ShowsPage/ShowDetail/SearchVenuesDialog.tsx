import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Pagination } from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getSearchVenueList } from '~/apis/shows';
import { useDebounce } from '~/hooks/useDebounce';
import { BaseDialog } from '~/layouts/BaseLayout/BaseDialog';
import { VenueList } from '~/types/api.types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setVenue: (name: string, id: number) => void;
};

export function SearchVenuesDialog({ isOpen, onClose, setVenue }: Props) {
  const [word, setWord] = useState('');
  const [venueList, setVenueList] = useState<VenueList | null>(null);
  const debounceWord = useDebounce({ value: word, delay: 400 });

  const SearchVenueList = useCallback(
    async (page?: number) => {
      const data = await getSearchVenueList(debounceWord, page);
      setVenueList(data);
    },
    [debounceWord],
  );

  useEffect(() => {
    if (debounceWord) {
      SearchVenueList();
    } else {
      setVenueList(null);
    }
  }, [debounceWord, SearchVenueList]);

  const onChangeWord = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const onChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    SearchVenueList(value);
  };

  return (
    <BaseDialog
      style={SearchVenuesDialogStyle}
      isOpen={isOpen}
      onClose={onClose}
    >
      <StyledDialogHead>
        <StyledDialogTitle>공연장 검색</StyledDialogTitle>
        <StyledCloseButton onClick={onClose}>
          <StyledCloseIcon />
        </StyledCloseButton>
      </StyledDialogHead>
      <SearchInput onChange={onChangeWord} />
      {venueList && !!venueList?.venues.length ? (
        <>
          <VenueListWrapper>
            {venueList.venues.map((venue) => (
              <VenueRow
                key={venue.id}
                onClick={() => setVenue(venue.name, venue.id)}
              >
                <VenueName>{venue.name}</VenueName>
                <VenueAddress>{venue.address}</VenueAddress>
              </VenueRow>
            ))}
          </VenueListWrapper>

          <StyledPagination
            count={venueList.maxPage}
            page={venueList.currentPage}
            onChange={onChangePage}
          />
        </>
      ) : (
        <div>검색 내역이 없습니다.</div>
      )}
    </BaseDialog>
  );
}

const SearchVenuesDialogStyle = {
  width: '700px',
  height: '800px',
  display: 'flex',
  gap: '16px',
  flexDirection: 'column' as const,
};

const StyledDialogHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledDialogTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

const StyledCloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 30px;
  height: 30px;
`;

const SearchInput = styled.input`
  height: 40px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
`;

const VenueListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const VenueRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const VenueName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const VenueAddress = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;

const StyledPagination = styled(Pagination)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
