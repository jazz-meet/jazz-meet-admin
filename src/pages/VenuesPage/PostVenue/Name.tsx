import { useId } from 'react';
import { Input } from '~/components/Input';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Name: React.FC = () => {
  const id = useId();
  const { name, changeName } = usePostVenueFormStore(
    ({ name, changeName }) => ({
      name,
      changeName,
    }),
  );

  return (
    <>
      <label htmlFor={id}>공연장명</label>
      <Input
        id={id}
        value={name}
        onChange={({ target }) => changeName(target.value)}
      />
    </>
  );
};
