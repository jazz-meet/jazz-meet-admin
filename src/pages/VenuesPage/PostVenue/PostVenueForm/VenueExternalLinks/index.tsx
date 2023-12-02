import styled from '@emotion/styled';
import { VenueExternalLink } from './VenueExternalLink';

export const VenueExternalLinks: React.FC = () => {
  return (
    <StyledVenueExternalLinks>
      <div>링크</div>

      {Object.values(EXTERNAL_LINKS).map(({ value, text }) => (
        <VenueExternalLink key={value} value={value} text={text} />
      ))}
    </StyledVenueExternalLinks>
  );
};

const EXTERNAL_LINKS = {
  NAVER_MAP: { value: 'naverMap', text: '네이버 지도' },
  INSTAGRAM: { value: 'instagram', text: '인스타그램' },
  OFFICIAL: { value: 'official', text: '공식 홈페이지' },
  ETC: { value: 'etc', text: '기타' },
  RESERVATION: { value: 'reservation', text: '예약 링크' },
};

const StyledVenueExternalLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
