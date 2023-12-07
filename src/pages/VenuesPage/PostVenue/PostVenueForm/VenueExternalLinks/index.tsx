import styled from '@emotion/styled';
import { usePostVenueFormStore } from '../usePostVenueFormStore';
import { ExternalLink } from './ExternalLink';

export const ExternalLinks: React.FC = () => {
  const { links, changeLink } = usePostVenueFormStore((state) => ({
    links: state.links,
    changeLink: state.changeLink,
  }));

  return (
    <StyledExternalLinks>
      <div>링크</div>

      {Object.entries(links).map(([key, value]) => (
        <ExternalLink
          key={key}
          text={key}
          value={value}
          onChange={(value) => changeLink(key, value)}
        />
      ))}
    </StyledExternalLinks>
  );
};

const StyledExternalLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
