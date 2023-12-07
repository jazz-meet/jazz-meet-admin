import { Input } from '~/components/Input';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Name: React.FC = () => {
  const { name, changeName } = usePostVenueFormStore(
    ({ name, changeName }) => ({
      name,
      changeName,
    }),
  );

  return (
    <>
      <label htmlFor={NAME}>공연장명</label>
      <Input
        id={NAME}
        value={name}
        onChange={({ target }) => changeName(target.value)}
      />
    </>
  );
};

const NAME = 'venue-name';
