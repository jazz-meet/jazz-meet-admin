import { useId } from 'react';
import { AutoSizingTextArea } from '~/components/AutoSizingTextArea';
import { usePostVenueFormStore } from './usePostVenueFormStore';

export const Description: React.FC = () => {
  const id = useId();
  const { description, changeDescription } = usePostVenueFormStore(
    ({ description, changeDescription }) => ({
      description,
      changeDescription,
    }),
  );

  return (
    <>
      <label htmlFor={id}>{'공연장 설명 (1,000자 이내로 작성해주세요.)'}</label>
      <AutoSizingTextArea
        id={id}
        value={description}
        onChange={changeDescription}
        placeholder="공연장 설명을 입력해주세요."
      />
    </>
  );
};
