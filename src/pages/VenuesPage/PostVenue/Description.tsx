import { AutoSizingTextArea } from '~/components/AutoSizingTextArea';
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
      <AutoSizingTextArea
        id={DESCRIPTION}
        value={description}
        onChange={changeDescription}
        placeholder="공연장 설명을 입력해주세요."
      />
    </>
  );
};

const DESCRIPTION = 'venue-description';
