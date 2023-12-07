import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Description: React.FC = () => {
  const { description, changeDescription } = usePostVenueFormStore(
    ({ description, changeDescription }) => ({
      description,
      changeDescription,
    }),
  );

  return (
    <>
      <label htmlFor={DESCRIPTION}>공연장 설명</label>
      <textarea
        id={DESCRIPTION}
        placeholder="공연장 설명을 입력해주세요."
        value={description}
        onChange={({ target }) => changeDescription(target.value)}
      />
    </>
  );
};

const DESCRIPTION = 'venue-description';
