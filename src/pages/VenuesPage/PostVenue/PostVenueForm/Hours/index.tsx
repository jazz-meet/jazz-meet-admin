import styled from '@emotion/styled';
import {
  LocalizationProvider,
  SingleInputTimeRangeField,
} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { Button } from '~/components/Button';
import { VenuePostBody } from '~/types/api.types';

type VenueHours = VenuePostBody['venueHours'];

export const Hours: React.FC = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const businessHours = useRef<string>('');
  const [venueHours, setVenueHours] = useState<VenueHours>([]);

  console.log(venueHours);

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(event.target.checked);
  };

  const onWeekdayClick = (weekday: string) => {
    if (!checkboxChecked && !businessHours.current) {
      alert('영업시간을 입력해주세요.');
      return;
    }

    const venueHour = checkboxChecked ? '휴무' : businessHours.current;

    setVenueHours((prev) => {
      return [...prev, { day: weekday, businessHours: venueHour }];
    });
  };

  return (
    <>
      <div>영업시간</div>

      <StyledHourInputContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['SingleInputTimeRangeField']}>
            <SingleInputTimeRangeField
              label="시작시간 - 종료시간"
              onChange={([startTime, endTime]) => {
                if (!startTime || !endTime) {
                  return;
                }

                businessHours.current = `${startTime.format(
                  'HH:mm',
                )} ~ ${endTime.format('HH:mm')}`;
              }}
              defaultValue={[dayjs(), dayjs()]}
              disabled={checkboxChecked}
            />
          </DemoContainer>
        </LocalizationProvider>
        <StyledCheckboxContainer>
          <label htmlFor="venue-closed">휴무</label>
          <input
            id="venue-closed"
            type="checkbox"
            onChange={onCheckboxChange}
          />
        </StyledCheckboxContainer>
      </StyledHourInputContainer>

      <StyledWeekdays>
        {[
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일',
        ].map((weekday) => (
          <Button
            key={weekday}
            type="button"
            onClick={() => onWeekdayClick(weekday)}
            disabled={venueHours?.some((hour) => hour.day === weekday)}
          >
            {weekday.slice(0, 1)}
          </Button>
        ))}
      </StyledWeekdays>

      <StyledHourList>
        {venueHours.map((hour) => (
          <StyledHourItem key={hour.day}>
            <div>
              {hour.day} | {hour.businessHours}
            </div>
            <Button>수정</Button>
            <Button>삭제</Button>
          </StyledHourItem>
        ))}
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
