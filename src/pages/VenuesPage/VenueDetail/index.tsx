import styled from '@emotion/styled';
import { Buttons } from './Buttons';

export const VenueDetail = () => {
  return (
    <StyledVenuesPage>
      <Buttons />
      <StyledBody>
        <StyledTitle>공연장 id</StyledTitle>
        <StyledContent>1</StyledContent>

        <StyledTitle>공연장명</StyledTitle>
        <StyledContent>블루밍 재즈바</StyledContent>

        <StyledTitle>공연장 이미지</StyledTitle>
        <StyledImageContainer>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <img
              src={
                'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
              }
            />
          </StyledImageWrapper>
        </StyledImageContainer>

        <StyledTitle>도로명 주소</StyledTitle>
        <StyledContent>서울 강남구 테헤란로19길 21 지하1층</StyledContent>

        <StyledTitle>지번</StyledTitle>
        <StyledContent>역삼동 637-29</StyledContent>

        <StyledTitle>전화번호</StyledTitle>
        <StyledContent>0507-1466-5026</StyledContent>

        <StyledTitle>링크</StyledTitle>
        <StyledContent>
          <div>naverMap</div>
          <div>https://naver.me/5NderYmB</div>
          <div>instagram</div>
          <div>https://www.instagram.com/blueming_jazz/</div>
        </StyledContent>

        <StyledTitle>영업 시간</StyledTitle>
        <StyledContent>
          <div>월요일</div>
          <div>10:00 ~ 18:00</div>
          <div>화요일</div>
          <div>휴무</div>
          <div>...</div>
        </StyledContent>

        <StyledTitle>공연장 설명</StyledTitle>
        <StyledContent>라이브 재즈바 블루밍입니다.</StyledContent>

        <StyledTitle>공연장 좌표</StyledTitle>
        <StyledContent>lat: 37.501, lng: 127.043</StyledContent>
      </StyledBody>
      <Buttons />
    </StyledVenuesPage>
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
