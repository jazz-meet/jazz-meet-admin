import { POST_VENUE_NAMES } from '~/constants/formNames';
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
      <label htmlFor={POST_VENUE_NAMES.DESCRIPTION}>공연장 설명</label>
      <textarea
        id={POST_VENUE_NAMES.DESCRIPTION}
        placeholder="공연장 설명을 입력해주세요."
        value={description}
        onChange={({ target }) => changeDescription(target.value)}
      />
    </>
  );
};
