import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVenueDetail } from '~/apis/venue';
import { Map } from '~/components/Map';
import { VenueDetail as VenueDetailData } from '~/types/api.types';
import { Buttons } from './Buttons';

export const VenueDetail = () => {
  const { venueId } = useParams();
  const [venueDetail, setVenueDetail] = useState<VenueDetailData>();

  useEffect(() => {
    (async () => {
      if (!venueId) {
        return;
      }

      const data = await getVenueDetail(venueId);
      setVenueDetail(data);
    })();
  }, []);

  return (
    <>
      {venueDetail ? (
        <StyledVenuesPage>
          <Buttons />
          <StyledBody>
            <StyledTitle>공연장 id</StyledTitle>
            <StyledContent>{venueDetail.id}</StyledContent>

            <StyledTitle>공연장명</StyledTitle>
            <StyledContent>{venueDetail.name}</StyledContent>

            <StyledTitle>공연장 이미지</StyledTitle>
            <StyledImageContainer>
              {venueDetail.images.map((image) => (
                <StyledImageWrapper key={image.id}>
                  <img src={image.url} />
                </StyledImageWrapper>
              ))}
            </StyledImageContainer>

            <StyledTitle>도로명 주소</StyledTitle>
            <StyledContent>{venueDetail.roadNameAddress}</StyledContent>

            <StyledTitle>지번</StyledTitle>
            <StyledContent>{venueDetail.lotNumberAddress}</StyledContent>

            <StyledTitle>전화번호</StyledTitle>
            <StyledContent>{venueDetail.phoneNumber}</StyledContent>

            <StyledTitle>링크</StyledTitle>
            <StyledContent>
              {venueDetail.links.map((link) => (
                <React.Fragment key={link.type}>
                  <StyledFontBold>{link.type}</StyledFontBold>
                  <div>{link.url}</div>
                </React.Fragment>
              ))}
            </StyledContent>

            <StyledTitle>영업 시간</StyledTitle>
            <StyledContent>
              {venueDetail.venueHours.map((venueHour) => (
                <StyledVenueHour key={venueHour.day}>
                  <StyledFontBold>{venueHour.day + ' |'}</StyledFontBold>
                  <div>{venueHour.businessHours}</div>
                </StyledVenueHour>
              ))}
            </StyledContent>

            <StyledTitle>공연장 설명</StyledTitle>
            <StyledContent>{venueDetail.description}</StyledContent>

            <StyledTitle>공연장 좌표</StyledTitle>
            <StyledMapWrapper>
              <Map
                initCoordinate={{
                  latitude: venueDetail.latitude,
                  longitude: venueDetail.longitude,
                }}
              />
            </StyledMapWrapper>
          </StyledBody>
          <Buttons />
        </StyledVenuesPage>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  );
};

const StyledVenuesPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledBody = styled.div`
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0 0 #000000;
  display: grid;
  grid-template-columns: 150px 1fr;

  > * {
    border-bottom: 1px solid #dbe1e4;
  }
`;

const StyledTitle = styled.div`
  border-right: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: pre-wrap;
`;

const StyledImageContainer = styled.div`
  overflow-x: scroll;
  height: 200px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const StyledImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  user-select: none;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledVenueHour = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledFontBold = styled.div`
  font-weight: bold;
`;

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
