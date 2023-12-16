import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getShowList } from '~/apis/shows';
import { PaginationBox } from '~/components/PaginationBox';
import { PATH } from '~/constants/path';
import { SearchParams, ShowList } from '~/types/api.types';

export const ShowsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showList, setShowList] = useState<ShowList>();
  const [showListParams, setShowListParams] = useState<SearchParams>({
    page: 1,
  });

  useEffect(() => {
    (async () => {
      const showList = await getShowList(showListParams);

      setShowList(showList);
    })();
  }, [showListParams]);

  const onPageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setShowListParams((prev) => ({ ...prev, page }));
  };

  const goDetail = (id: number) => {
    navigate(`${PATH.SHOWS}/${id}`);
  };

  const goPost = () => {
    navigate(`${PATH.SHOWS_POST}`);
  };

  return (
    <StyledVenuesPage>
      {showList ? (
        <>
          <div>
            <Button variant="contained" onClick={goPost}>
              공연 추가
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>팀명</TableCell>
                  <TableCell align="center">시작시간</TableCell>
                  <TableCell align="center">종료시간</TableCell>
                  <TableCell align="center">공연장명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showList.shows.map((show) => (
                  <StyledTableRow
                    key={show.id}
                    onClick={() => {
                      goDetail(show.id);
                    }}
                  >
                    <TableCell>{show.id}</TableCell>
                    <TableCell>{show.teamName}</TableCell>
                    <TableCell align="center">
                      {new Date(show.startTime).toLocaleString()}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(show.endTime).toLocaleString()}
                    </TableCell>
                    <TableCell align="center">{show.venueName}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PaginationBox
            maxPage={showList.maxPage}
            currentPage={showList.currentPage}
            onChange={onPageChange}
          />
        </>
      ) : (
        <div>로딩중...</div>
      )}
    </StyledVenuesPage>
  );
};

const StyledVenuesPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const StyledTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  :hover {
    background-color: '#DBE1E4';
    cursor: pointer;
  }
`;
