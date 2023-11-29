import styled from '@emotion/styled';

type Props = {
  src: string;
};

export const Image: React.FC<Props> = ({ src }) => {
  return (
    <StyledImage>
      <Img src={src} />
    </StyledImage>
  );
};

const StyledImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;

  user-select: none;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
