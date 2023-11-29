import { css } from '@emotion/react';

export const clickableStyle = css`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
