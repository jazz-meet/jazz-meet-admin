import { useId } from 'react';
import { Input } from '~/components/Input';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const PhoneNumber: React.FC = () => {
  const id = useId();
  const { phoneNumber, changePhoneNumber } = usePostVenueFormStore((state) => ({
    phoneNumber: state.phoneNumber,
    changePhoneNumber: state.changePhoneNumber,
  }));

  return (
    <>
      <label htmlFor={id}>{`전화번호 ('-' 포함하여 작성해주세요.)`}</label>
      <Input
        id={id}
        type="text"
        value={phoneNumber}
        onChange={(event) => changePhoneNumber(event.target.value)}
        maxLength={14}
        placeholder="010-0000-0000"
      />
    </>
  );
};
