import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import {
  deleteInquiryAnswer,
  getInquiryDetailData,
  postInquiryAnswer,
  putInquiryAnswer,
} from '~/apis/inquiry';
import { BaseDialog } from '~/layouts/BaseLayout/BaseDialog';
import { InquiryDetailData } from '~/types/api.types';

type Props = {
  id: number;
  dialogTitle: string;
  isOpen: boolean;
  onClose: () => void;
};

export const InquiriesDialog: React.FC<Props> = ({
  id,
  dialogTitle,
  isOpen,
  onClose,
}) => {
  const [inquiryDetailData, setInquiryDetailData] =
    useState<InquiryDetailData>();
  const [answerContent, setAnswerContent] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isCompleteInquiry, setIsCompleteInquiry] = useState(false);

  const getInquiryDetail = useCallback(async () => {
    const inquiryList = await getInquiryDetailData(id);

    setInquiryDetailData(inquiryList);
  }, [id]);

  useEffect(() => {
    if (inquiryDetailData) {
      const hasAnswer = inquiryDetailData.answer !== null;

      setAnswerContent(hasAnswer ? inquiryDetailData.answer!.content : '');
      setIsCompleteInquiry(hasAnswer);
    }
  }, [inquiryDetailData]);

  useEffect(() => {
    getInquiryDetail();
  }, [getInquiryDetail]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setAnswerContent(inquiryDetailData?.answer?.content || '');
  };

  const deleteInquiry = async () => {
    if (!inquiryDetailData || inquiryDetailData?.answer === null) return;

    const isDelete = confirm('답변을 삭제하시겠습니까?');
    const answerId = inquiryDetailData.answer.id;

    if (isDelete && answerId) {
      await deleteInquiryAnswer(answerId);
      getInquiryDetail();
    }
  };

  const submit = async () => {
    if (isCompleteInquiry && inquiryDetailData) {
      const answerId = inquiryDetailData?.answer!.id;
      const params = { answerId: answerId, content: answerContent };

      await putInquiryAnswer(params);
    } else {
      const params = {
        inquiryId: id,
        content: answerContent,
      };

      await postInquiryAnswer(params);
    }
    setIsEditMode(false);
    getInquiryDetail();
  };

  const isDisabledSubmit = isCompleteInquiry
    ? !(isEditMode && inquiryDetailData?.answer!.content !== answerContent) ||
      !answerContent
    : !answerContent;

  return (
    <BaseDialog style={InquiriesDialogStyle} isOpen={isOpen} onClose={onClose}>
      {inquiryDetailData ? (
        <>
          <StyledDialogHead>
            <StyledDialogTitle>{dialogTitle} 문의</StyledDialogTitle>
            <StyledCloseButton onClick={onClose}>
              <StyledCloseIcon />
            </StyledCloseButton>
          </StyledDialogHead>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">상태</TableCell>
                  <TableCell align="center">닉네임</TableCell>
                  <TableCell align="center">날짜</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{inquiryDetailData.id}</TableCell>
                  <TableCell align="center">
                    {inquiryDetailData.status}
                  </TableCell>
                  <TableCell align="center">
                    {inquiryDetailData.nickname}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(inquiryDetailData.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <StyledDialogTitle>내용</StyledDialogTitle>
          <StyledContent>{inquiryDetailData.content}</StyledContent>
          <StyledAnswerHeader>
            <StyledDialogTitle>답변</StyledDialogTitle>
            {isCompleteInquiry && (
              <div>
                <IconButton onClick={toggleEditMode}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={deleteInquiry}>
                  <DeleteIcon />
                </IconButton>
              </div>
            )}
          </StyledAnswerHeader>
          <StyledAnswer>
            {isCompleteInquiry && !isEditMode ? (
              <StyledContent style={{ height: '100%' }}>
                {answerContent}
              </StyledContent>
            ) : (
              <textarea
                value={answerContent}
                onChange={(e) => setAnswerContent(e.target.value)}
              />
            )}
          </StyledAnswer>
          <StyledButtonWrapper>
            <Button variant="contained" onClick={onClose}>
              취소
            </Button>
            <Button
              variant="contained"
              disabled={isDisabledSubmit}
              onClick={submit}
            >
              {isCompleteInquiry ? '수정' : '저장'}
            </Button>
          </StyledButtonWrapper>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </BaseDialog>
  );
};

const InquiriesDialogStyle = {
  width: '700px',
  height: '800px',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between' as const,
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

const StyledContent = styled.div`
  height: 150px;
  border-radius: 8px;
  padding: 8px;
  background-color: #f5f6fc;
  box-sizing: border-box;
`;

const StyledAnswer = styled.div`
  width: 100%;
  height: 40%;

  textarea {
    width: 100%;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 16px;
    resize: none;
  }
`;

const StyledAnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: right;
`;
