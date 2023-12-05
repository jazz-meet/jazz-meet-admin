import styled from '@emotion/styled';
import { EXTERNAL_LINKS } from '~/constants/externalLinks';
import { ExternalLink } from './ExternalLink';

export const ExternalLinks: React.FC = () => {
  return (
    <StyledExternalLinks>
      <div>링크</div>

      {Object.values(EXTERNAL_LINKS).map(({ type, text }) => (
        <ExternalLink key={type} type={type} text={text} />
      ))}
    </StyledExternalLinks>
  );
};

const StyledExternalLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
