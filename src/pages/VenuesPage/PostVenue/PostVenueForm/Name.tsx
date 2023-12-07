import { Input } from '~/components/Input';
import { POST_VENUE_NAMES } from '~/constants/formNames';
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
      <label htmlFor={POST_VENUE_NAMES.NAME}>공연장명</label>
      <Input
        id={POST_VENUE_NAMES.NAME}
        value={name}
        onChange={({ target }) => changeName(target.value)}
      />
    </>
  );
};
