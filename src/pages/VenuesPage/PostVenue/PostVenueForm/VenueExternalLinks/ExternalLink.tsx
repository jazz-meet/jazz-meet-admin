import styled from '@emotion/styled';
import { Input } from '~/components/Input';
import { POST_VENUE_NAMES } from '~/constants/formNames';

type Props = {
  type: string;
  text: string;
};

export const ExternalLink: React.FC<Props> = ({ type, text }) => {
  return (
    <StyledExternalLink>
      <StyledName>{text}</StyledName>
      <Input
        name={POST_VENUE_NAMES.EXTERNAL_LINKS + type}
        placeholder="https://"
      />
    </StyledExternalLink>
  );
};

const StyledExternalLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100%;
  }
`;

const StyledName = styled.div`
  width: 100px;
`;
