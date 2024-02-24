import styled from '@emotion/styled';
import {
  LocalizationProvider,
  SingleInputTimeRangeField,
} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useId, useRef, useState } from 'react';
import { Button } from '~/components/Button';
import { WEEKDAYS } from '~/constants/date';
import { usePostVenueFormStore } from '../usePostVenueFormStore';

export const Hours: React.FC = () => {
  const id = useId();
  const { venueHours, addVenueHour, deleteVenueHour } = usePostVenueFormStore(
    ({ venueHours, addVenueHour, deleteVenueHour }) => ({
      venueHours,
      addVenueHour,
      deleteVenueHour,
    }),
  );
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const businessHours = useRef<string>('');

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(event.target.checked);
  };

  const onWeekdayClick = (weekday: string) => {
    if (!checkboxChecked && !businessHours.current) {
      alert('영업시간을 확인해주세요.');
      return;
    }

    const venueHour = checkboxChecked ? '휴무' : businessHours.current;
    addVenueHour({ day: weekday, businessHours: venueHour });
  };

  return (
    <>
      <div>영업시간</div>

      <StyledHourInputContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['SingleInputTimeRangeField']}>
            <SingleInputTimeRangeField
              ampm={false}
              label="시작시간 - 종료시간"
              onChange={([startTime, endTime]) => {
                if (!startTime || !endTime) {
                  return;
                }

                businessHours.current = `${startTime.format(
                  'HH:mm',
                )} ~ ${endTime.format('HH:mm')}`;
              }}
              defaultValue={[
                dayjs('2023-01-01T15:00:00Z'),
                dayjs('2023-01-01T15:00:00Z'),
              ]}
              disabled={checkboxChecked}
            />
          </DemoContainer>
        </LocalizationProvider>
        <StyledCheckboxContainer>
          <label htmlFor={id}>휴무</label>
          <input id={id} type="checkbox" onChange={onCheckboxChange} />
        </StyledCheckboxContainer>
      </StyledHourInputContainer>

      <StyledWeekdays>
        {WEEKDAYS.map((weekday) => (
          <Button
            key={weekday}
            type="button"
            onClick={() => onWeekdayClick(weekday)}
            disabled={venueHours.some((hour) => hour.day === weekday)}
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
            <Button onClick={() => deleteVenueHour(hour.day)}>삭제</Button>
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

  .MuiFormControl-root.MuiTextField-root {
    width: 130px;
    min-width: 130px;
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
