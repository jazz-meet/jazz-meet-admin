import styled from '@emotion/styled';
import {
  LocalizationProvider,
  SingleInputTimeRangeField,
} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Button } from '~/components/Button';

export const Hours: React.FC = () => {
  return (
    <>
      <div>영업시간</div>
      <StyledHourInputContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['SingleInputTimeRangeField']}>
            <SingleInputTimeRangeField label="시작시간 - 종료시간" />
          </DemoContainer>
        </LocalizationProvider>
        <StyledCheckboxContainer>
          <label htmlFor="venue-closed">휴무</label>
          <input id="venue-closed" type="checkbox" />
        </StyledCheckboxContainer>
      </StyledHourInputContainer>

      <StyledWeekdays>
        <Button>일</Button>
        <Button>월</Button>
        <Button>화</Button>
        <Button>수</Button>
        <Button>목</Button>
        <Button>금</Button>
        <Button>토</Button>
      </StyledWeekdays>

      <StyledHourList>
        <StyledHourItem>
          <div>월요일 | 10:00 ~ 12:00</div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StyledHourItem>
        <StyledHourItem>
          <div>화요일 | 10:00 ~ 12:00</div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StyledHourItem>
        <StyledHourItem>
          <div>수요일 | 10:00 ~ 12:00</div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StyledHourItem>
        <StyledHourItem>
          <div>목요일 | 휴무</div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StyledHourItem>
      </StyledHourList>
    </>
  );
};

const StyledHourInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  fieldset {
    border: 1px solid #000000;
  }
`;

const StyledCheckboxContainer = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  input {
    width: 20px;
    height: 20px;
  }
`;

const StyledWeekdays = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledHourList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid #000000;
  padding: 10px;
  border-radius: 5px;
`;

const StyledHourItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
