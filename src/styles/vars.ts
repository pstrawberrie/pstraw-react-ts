/**
 * Colors
 */
export const colors = {
  light: '#eee',
  dark: '#222',

  unique: {
    topBar: '#3f3f3f',
  },
};

/**
 * Sizes
 */
export const siteMaxWidth = '1366px';
export const sitePadding = '1rem';

/**
 * Typography
 */
export const rootFontSize = 16;
export const remCalc = (num: number): string =>
  `${(num / rootFontSize).toFixed(2)}rem`;

// Font Sizes
export const fontSizes = {
  default: remCalc(rootFontSize),
  lg: remCalc(32),
};

// Font Styles
export const type = {
  default: `
    font-family: 'Oxygen', sans-serif;
    font-size: ${fontSizes.default};
    line-height: 1.35;
  `,
  alt: `
    font-family: 'Ubuntu', sans-serif;
    font-size: ${fontSizes.default};
    font-weight: normal;
    line-height: 1.18;
  `,
  title: `
    font-family: 'Ubuntu', sans-serif;
    font-size: ${fontSizes.lg};
    font-weight: bold;
    line-height: 1.18;
  `
};
