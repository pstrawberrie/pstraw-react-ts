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
    font-family: Arial, sans-serif;
    font-size: ${fontSizes.default};
  `,
};
