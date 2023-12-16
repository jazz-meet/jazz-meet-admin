import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteShowDetail } from '~/apis/shows';
import { ShowDetailType } from '~/types/api.types';

type Props = {
  showDetailData: ShowDetailType;
  onEdit: () => void;
};

export const DetailContent: React.FC<Props> = ({ showDetailData, onEdit }) => {
  const navigate = useNavigate();

  const deleteShow = async () => {
    const isDelete = confirm('공연을 삭제하시겠습니까?');

    if (isDelete) {
      await deleteShowDetail(Number(showDetailData.id));
      navigate('/shows');
    }
  };

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

  return (
    <Container>
      <Poster>
        <StyledTitle>포스터</StyledTitle>
        <PosterContainer>
          <StyledPoster src={showDetailData.poster.url} />
        </PosterContainer>
      </Poster>
      <ContentWrapper>
        <Header>
          <StyledTitle>공연 이름</StyledTitle>
          <div>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={deleteShow}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Header>
        <StyledContent>{showDetailData.teamName}</StyledContent>
        <StyledTitle>공연 장소</StyledTitle>
        <StyledContent>{showDetailData.venueName}</StyledContent>
        <StyledTitle>공연 시간</StyledTitle>
        <StyledContent>
          {getDate(new Date(showDetailData.startTime))}
        </StyledContent>
        <StyledContent>
          {getDate(new Date(showDetailData.endTime))}
        </StyledContent>
        <StyledTitle>공연 설명</StyledTitle>
        <StyledContent style={{ flex: 1 }}>
          {showDetailData.description}
        </StyledContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  gap: 50px;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PosterContainer = styled.div`
  width: 400px;
  height: 670px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 50px;
`;

const StyledPoster = styled.img`
  width: 400px;
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
  gap: 30px;
`;

const StyledContent = styled.div`
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  background-color: #f5f6fc;
`;

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
