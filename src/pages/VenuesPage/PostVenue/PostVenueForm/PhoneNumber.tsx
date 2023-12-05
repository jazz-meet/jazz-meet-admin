import styled from '@emotion/styled';
import { Input } from '~/components/Input';
import { POST_VENUE_NAMES } from '~/constants/formNames';

export const PhoneNumber: React.FC = () => {
  return (
    <>
      <div>전화번호</div>
      <StyledInputs>
        <Input name={POST_VENUE_NAMES.PHONE_NUMBER} type="text" maxLength={4} />
        <span>-</span>
        <Input name={POST_VENUE_NAMES.PHONE_NUMBER} type="text" maxLength={4} />
        <span>-</span>
        <Input name={POST_VENUE_NAMES.PHONE_NUMBER} type="text" maxLength={4} />
      </StyledInputs>
    </>
  );
};

const StyledInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100px;
  }
`;
