import styled from '@emotion/styled';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

import { VenueExternalLinks } from './VenueExternalLinks';
import { VenueImages } from './VenueImages';
import { VenueLocation } from './VenueLocation';
import { VenuePhoneNumber } from './VenuePhoneNumber';

export const PostVenue: React.FC = () => {
  return (
    <StyledPostVenue>
      <StyledHeader>{`공연장 > 공연장 생성`}</StyledHeader>

      <StyledForm>
        <label htmlFor="venue-name">공연장명</label>
        <Input id={'venue-name'} />
        <VenueImages />
        <VenueLocation />
        <VenuePhoneNumber />
        <VenueExternalLinks />
        <label htmlFor="venue-name">영업시간</label>
        <Input />
        <label htmlFor="venue-name">공연장 설명</label>
        <Input />
        <StyledButtons>
          <Button>생성</Button>
          <Button>취소</Button>
        </StyledButtons>
      </StyledForm>
    </StyledPostVenue>
  );
};

const StyledPostVenue = styled.div`
  width: 100%;
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #000000;
  font-size: 24px;
  padding: 20px;
`;

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledButtons = styled.div`
  display: flex;
`;
