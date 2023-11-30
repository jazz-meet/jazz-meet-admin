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

export const buttonStyle = css`
  min-width: 37.5px;
  min-height: 37.5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 2px 2px 0 0 #000000;

  &:not(:disabled) {
    &:active {
      box-shadow: 1px 1px 0 0 #000000;
      transform: translate(1px, 1px);
    }
  }

  &:disabled {
    color: #000000;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
