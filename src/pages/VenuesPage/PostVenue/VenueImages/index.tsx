import styled from '@emotion/styled';
import { Button } from '~/components/Button';
import { Image } from './Image';

export const VenueImages: React.FC = () => {
  return (
    <>
      <StyledLabel>
        <span>공연장 이미지 등록</span>
        <Button>+</Button>
      </StyledLabel>
      <StyledImageContainer>
        <Image src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_134%2F1617367270275ohjIe_JPEG%2FCiOfR7-z517aRHL5RBhE9ny2.jpg" />
      </StyledImageContainer>
    </>
  );
};

const StyledImageContainer = styled.div`
  overflow-x: scroll;
  border: 1px solid #000000;
  border-radius: 8px;
  height: 200px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;
