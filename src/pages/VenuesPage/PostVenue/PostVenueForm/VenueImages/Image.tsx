import styled from '@emotion/styled';
import CancelIcon from '@mui/icons-material/Cancel';
import { clickableStyle } from '~/styles/common';

type Props = {
  src: string;
  onDeleteButtonClick: () => void;
};

export const Image: React.FC<Props> = ({ src, onDeleteButtonClick }) => {
  return (
    <StyledImage>
      <CancelIcon onClick={onDeleteButtonClick} />
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
  position: relative;

  svg {
    ${clickableStyle};
    cursor: pointer;
    fill: #ffffff;
    stroke: #000000;
    position: absolute;
    right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
