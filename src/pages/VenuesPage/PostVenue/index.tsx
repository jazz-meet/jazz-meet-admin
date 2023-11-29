import styled from '@emotion/styled';
import { Input } from '~/components/Input';
import { VenueImages } from './VenueImages';

export const PostVenue: React.FC = () => {
  return (
    <StyledPostVenue>
      <StyledHeader>{`공연장 > 공연장 생성`}</StyledHeader>

      <StyledForm>
        <StyledInputContainer>
          <label htmlFor="venue-name">공연장명</label>
          <Input id={'venue-name'} />
        </StyledInputContainer>

        <StyledInputContainer>
          <VenueImages />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">도로명 주소</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">지번</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">전화번호</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">링크</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">영업시간</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">공연장 설명</label>
          <Input />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="venue-name">공연장 좌표</label>
          <Input />
        </StyledInputContainer>
      </StyledForm>
    </StyledPostVenue>
  );
};

const StyledPostVenue = styled.div`
  width: 100%;
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #000000;
  font-size: 24px;
  padding: 20px;
`;

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
