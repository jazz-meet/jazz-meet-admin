import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCallback, useEffect, useState } from 'react';
import { getInquiryData } from '~/apis/inquiry';
import { PaginationBox } from '~/components/PaginationBox';
import { INQUIRY_CATEGORIES } from '~/constants/INQUIRY_CATEGORIES';
import { clickableStyle } from '~/styles/common';
import { InquiryData, InquiryParams } from '~/types/api.types';
import { InquiryCategories } from '~/types/inquiry.types';
import { InquiriesDialog } from './InquiriesDialog';

export const InquiriesPage: React.FC = () => {
  const [inquiryList, setInquiryList] = useState<InquiryData>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isOpenDialog = !!selectedId;
  const [inquiryListParams, setInquiryListParams] = useState<InquiryParams>({
    category: '서비스',
    page: 1,
  });

  const getInquiry = useCallback(async () => {
    const inquiryList = await getInquiryData(inquiryListParams);

    setInquiryList(inquiryList);
  }, [inquiryListParams]);

  useEffect(() => {
    getInquiry();
  }, [getInquiry]);

  const selectCategory = (category: InquiryCategories) => {
    setInquiryListParams((prev) => ({ ...prev, category, page: 1 }));
  };

  const onPageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setInquiryListParams((prev) => ({ ...prev, page }));
  };

  const openDialog = (id: number) => {
    setSelectedId(id);
  };

  const closeDialog = () => {
    setSelectedId(null);
    getInquiry();
  };

  // TODO : 문의글 삭제 비밀번호 필요 없는 api 나오면 붙이기
  return (
    <StyledVenuesPage>
      <StyledHeader>문의</StyledHeader>
      <StyledCategories>
        {INQUIRY_CATEGORIES.map((category, index) => (
          <StyledCategory
            key={index}
            onClick={() => selectCategory(category)}
            $isSelected={inquiryListParams.category === category}
          >
            {category}
          </StyledCategory>
        ))}
      </StyledCategories>

      {inquiryList ? (
        <StyledInquiriesWrapper>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledCenterTableCell sx={{ width: 100 }}>
                    id
                  </StyledCenterTableCell>
                  <StyledCenterTableCell sx={{ width: 100 }}>
                    상태
                  </StyledCenterTableCell>
                  <TableCell sx={{ width: 800 }}>내용</TableCell>
                  <StyledCenterTableCell>닉네임</StyledCenterTableCell>
                  <StyledCenterTableCell>생성일시</StyledCenterTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inquiryList.inquiries.map((inquiry) => (
                  <StyledTableRow
                    key={inquiry.id}
                    onClick={() => openDialog(inquiry.id)}
                  >
                    <StyledCenterTableCell>{inquiry.id}</StyledCenterTableCell>
                    <StyledCenterTableCell>
                      {inquiry.status}
                    </StyledCenterTableCell>
                    <TableCell>
                      <StyledContent>{inquiry.content}</StyledContent>
                    </TableCell>
                    <StyledCenterTableCell>
                      {inquiry.nickname}
                    </StyledCenterTableCell>
                    <StyledCenterTableCell>
                      {new Date(inquiry.createdAt).toLocaleString()}
                    </StyledCenterTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PaginationBox
            maxPage={inquiryList.maxPage}
            currentPage={inquiryList.currentPage}
            onChange={onPageChange}
          />
        </StyledInquiriesWrapper>
      ) : (
        <div>로딩중...</div>
      )}
      {selectedId && (
        <InquiriesDialog
          dialogTitle={inquiryListParams.category}
          id={selectedId}
          isOpen={isOpenDialog}
          onClose={closeDialog}
        />
      )}
    </StyledVenuesPage>
  );
};

const StyledVenuesPage = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledCategories = styled.div`
  display: flex;
  gap: 20px;
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

const StyledInquiriesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCenterTableCell = styled(TableCell)`
  text-align: center;
`;

const StyledCategory = styled.div<{ $isSelected: boolean }>`
  ${clickableStyle};
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 22px;
  color: ${({ $isSelected }) => ($isSelected ? '#ff5019' : '#000')};
  ${({ $isSelected }) =>
    $isSelected ? `border-bottom: 4px solid #ff5019;` : ''}
`;

const StyledHeader = styled.div`
  font-size: 24px;
`;

const StyledContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
