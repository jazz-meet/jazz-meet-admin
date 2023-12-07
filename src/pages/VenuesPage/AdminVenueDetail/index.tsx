import styled from '@emotion/styled';

export const AdminVenueDetail = () => {
  return (
    <StyledVenuesPage>
      <StyledButtons>
        <StyledButton>수정</StyledButton>
        <StyledButton>삭제</StyledButton>
        <StyledButton>목록</StyledButton>
      </StyledButtons>
      <StyledBody>
        <StyledTitle>공연장 id</StyledTitle>
        <StyledContent>1</StyledContent>

        <StyledTitle>공연장명</StyledTitle>
        <StyledContent>블루밍 재즈바</StyledContent>

        <StyledTitle>공연장 이미지</StyledTitle>
        <StyledContent>
          <StyledImageContainer>
            <StyledImageWrapper>
              <StyledImage
                src={
                  'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg'
                }
              />
            </StyledImageWrapper>
            <StyledImageContent>
              <StyledFileName>1.jpg</StyledFileName>
              <StyledButton>삭제</StyledButton>
            </StyledImageContent>
          </StyledImageContainer>
          <StyledImageContainer>
            <StyledImageWrapper>
              <StyledImage
                src={
                  'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_140%2F1617367262454YU3Hd_JPEG%2FNsOFazqvYXyXDXceOEjH3cm6.jpg'
                }
              />
            </StyledImageWrapper>
            <StyledImageContent>
              <StyledFileName>2.jpg</StyledFileName>
              <StyledButton>삭제</StyledButton>
            </StyledImageContent>
          </StyledImageContainer>

          <StyledImageContainer>
            <StyledImageWrapper>
              <StyledImage
                src={
                  'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_38%2F1617367286324NVjl6_JPEG%2FfGewLoyOLnylRJcH_egqNlsr.jpg'
                }
              />
            </StyledImageWrapper>
            <StyledImageContent>
              <StyledFileName>3.jpg</StyledFileName>
              <StyledButton>삭제</StyledButton>
            </StyledImageContent>
          </StyledImageContainer>
        </StyledContent>

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
    </StyledVenuesPage>
  );
};

const StyledVenuesPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledButtons = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 2px 2px 0 0 #000000;

  &:active {
    box-shadow: 1px 1px 0 0 #000000;
    transform: translate(1px, 1px);
  }
`;

const StyledBody = styled.div`
  margin: 20px;
  border-radius: 5px;
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
  border-radius: 5px;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0 0 #000000;
  display: flex;
`;

const StyledImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  flex-shrink: 0;
  border-right: 1px solid #dbe1e4;
`;

const StyledImageContent = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledFileName = styled.div``;
