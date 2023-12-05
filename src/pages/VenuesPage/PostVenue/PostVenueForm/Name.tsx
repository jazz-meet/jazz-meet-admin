import { Input } from '~/components/Input';
import { POST_VENUE_NAMES } from '~/constants/formNames';

export const Name: React.FC = () => {
  return (
    <>
      <label htmlFor={POST_VENUE_NAMES.NAME}>공연장명</label>
      <Input id={POST_VENUE_NAMES.NAME} name={POST_VENUE_NAMES.NAME} />
    </>
  );
};
