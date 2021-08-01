import { css } from '@linaria/core';
import { reset } from './reset';
import { colors, type } from './vars';

const globalStyles = css`
  :global() {
    ${reset}

    body {
      ${type.default}
      color: ${colors.light}
      background: ${colors.dark};
    }

    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default globalStyles;
