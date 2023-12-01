import styled from '@emotion/styled';
import { Input } from '~/components/Input';

export const VenuePhoneNumber: React.FC = () => {
  return (
    <>
      <div>전화번호</div>
      <StyledInputs>
        <Input type="text" maxLength={4} />
        <span>-</span>
        <Input type="text" maxLength={4} />
        <span>-</span>
        <Input type="text" maxLength={4} />
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
