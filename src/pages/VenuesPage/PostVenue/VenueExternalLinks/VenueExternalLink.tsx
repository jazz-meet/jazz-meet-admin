import styled from '@emotion/styled';
import { Input } from '~/components/Input';

type Props = {
  value: string;
  text: string;
};

export const VenueExternalLink: React.FC<Props> = ({ value, text }) => {
  return (
    <StyledVenueExternalLink>
      <StyledName>{text}</StyledName>
      <Input name={value} placeholder="https://" />
    </StyledVenueExternalLink>
  );
};

const StyledVenueExternalLink = styled.div`
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
