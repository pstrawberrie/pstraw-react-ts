import { css } from '@linaria/core';
import { reset } from './reset';
import { colors, type } from './vars';

export const globals = css`
  :global() {
    ${reset}

    body {
      ${type.default}
      color: ${colors.light}
      background: ${colors.dark};
    }
  }
`;
