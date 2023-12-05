import { POST_VENUE_NAMES } from '~/constants/formNames';

export const Description: React.FC = () => {
  return (
    <>
      <label htmlFor={POST_VENUE_NAMES.DESCRIPTION}>공연장 설명</label>
      <textarea
        id={POST_VENUE_NAMES.DESCRIPTION}
        name={POST_VENUE_NAMES.DESCRIPTION}
      />
    </>
  );
};
