import styled from '@emotion/styled';
import { Input } from '~/components/Input';

type Props = {
  text: string;
  value: string;
  onChange: (value: string) => void;
};

export const ExternalLink: React.FC<Props> = ({ text, value, onChange }) => {
  return (
    <StyledExternalLink>
      <StyledName>{text}</StyledName>
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
