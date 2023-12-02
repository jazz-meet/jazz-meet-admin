import { Input } from '~/components/Input';

export const VenueName: React.FC = () => {
  return (
    <>
      <label htmlFor="venue-name">공연장명</label>
      <Input id="venue-name" />
    </>
  );
};
