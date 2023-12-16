import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postShowDetail, putShowDetail } from '~/apis/shows';
import { PATH } from '~/constants/path';
import { useText } from '~/hook/useText';
import { ShowDetailType } from '~/types/api.types';
import { PosterUploader } from './PosterUploader';
import { SearchVenuesDialog } from './SearchVenuesDialog';

type Props = {
  showDetailData?: ShowDetailType;
  closePost: () => void;
  setNewData?: (data: ShowDetailType) => void;
};

export const DetailInput: React.FC<Props> = ({
  showDetailData,
  closePost,
  setNewData,
}) => {
  const navigate = useNavigate();

  const teamName = useText(showDetailData ? showDetailData.teamName : '');
  const description = useText(showDetailData ? showDetailData.description : '');

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [venueName, setVenueName] = useState(
    showDetailData ? showDetailData.venueName : '',
  );
  const [venueId, setVenueId] = useState<number | null>(null);
  const [poster, setPoster] = useState(
    showDetailData ? showDetailData.poster : { id: null, url: '' },
  );
  const [startTime, setStartTime] = useState<Date>(
    showDetailData ? new Date(showDetailData.startTime) : new Date(),
  );
  const [endTime, setEndTime] = useState<Date>(
    showDetailData ? new Date(showDetailData.endTime) : new Date(),
  );

  const getDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };

    const formattedTime = new Intl.DateTimeFormat('kr', options).format(date);

    return formattedTime
      .replace(/\./g, '-')
      .replace(/\s+/g, '')
      .replace(/-(?=\d{2}:\d{2}$)/, ' ');
  };

  const isEditMode = !!showDetailData;
  const isDisabledSubmit = isEditMode
    ? !(
        showDetailData.teamName !== teamName.value ||
        showDetailData.description !== description.value ||
        showDetailData.venueName !== venueName ||
        showDetailData.poster.id !== poster.id ||
        getDate(new Date(showDetailData!.startTime)) !== getDate(startTime) ||
        getDate(new Date(showDetailData.endTime)) !== getDate(endTime)
      )
    : !teamName.value ||
      !description.value ||
      !venueName ||
      !poster.id ||
      !startTime ||
      !endTime;

  const onDialogClose = () => {
    setIsDialogOpen(false);
  };

  const onDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const setVenue = (name: string, id: number) => {
    setVenueName(name);
    setVenueId(id);
    onDialogClose();
  };

  const onChangePoster = (url: string, id: number | null) => {
    setPoster({
      url,
      id,
    });
  };

  const submit = async () => {
    if (!teamName.value || !description.value || !poster.id) return;

    const body = {
      teamName: teamName.value,
      description: description.value,
      posterId: poster.id,
      startTime: new Date(`${startTime}Z`),
      endTime: new Date(`${endTime}Z`),
    };

    if (isEditMode && setNewData) {
      const showId = showDetailData.id;
      const data = await putShowDetail({ showId: showId, body: body });

      closePost();
      setNewData(data);
    } else if (venueId) {
      const data = await postShowDetail({ venueId: venueId, body: body });

      navigate(`${PATH.SHOWS}/${data.id}`);
    }
  };

  return (
    <StyledDetailInput>
      <Container>
        <LeftContentWrapper>
          <PosterUploader
            id={poster.id}
            url={poster.url}
            onChangePoster={onChangePoster}
          />
        </LeftContentWrapper>
        <ContentWrapper>
          <Header>
            <StyledTitle>공연 이름</StyledTitle>
          </Header>
          <StyledInput value={teamName.value} onChange={teamName.onChange} />
          <Header>
            <StyledTitle>공연 장소</StyledTitle>
            <IconButton onClick={onDialogOpen}>
              <SearchIcon />
            </IconButton>
          </Header>
          <StyledInput value={venueName} disabled />
          <StyledTitle>공연 시간</StyledTitle>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
              <DateTimePicker
                ampm={false}
                format="YYYY-MM-DD HH:mm"
                label="시작 시간"
                value={dayjs(startTime)}
                onChange={(newValue) =>
                  newValue?.toDate && setStartTime(newValue.toDate())
                }
              />
              <DateTimePicker
                ampm={false}
                format="YYYY-MM-DD HH:mm"
                label="종료 시간"
                value={dayjs(endTime)}
                onChange={(newValue) =>
                  newValue?.toDate && setEndTime(newValue.toDate())
                }
              />
            </DemoContainer>
          </LocalizationProvider>

          <StyledTitle>공연 설명</StyledTitle>
          <StyledTextarea
            value={description.value}
            onChange={description.onChange}
          />
        </ContentWrapper>

        {isDialogOpen && (
          <SearchVenuesDialog
            setVenue={setVenue}
            isOpen={isDialogOpen}
            onClose={onDialogClose}
          />
        )}
      </Container>
      <StyledButtonWrapper>
        <Button variant="contained" onClick={closePost}>
          취소
        </Button>
        <Button
          variant="contained"
          onClick={submit}
          disabled={isDisabledSubmit}
        >
          {isEditMode ? '수정' : '등록'}
        </Button>
      </StyledButtonWrapper>
    </StyledDetailInput>
  );
};

const StyledDetailInput = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const StyledTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 auto;
  gap: 20px;
`;

const StyledInput = styled.input`
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: right;
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  resize: none;
`;
