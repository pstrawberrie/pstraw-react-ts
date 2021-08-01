import { css } from '@linaria/core';
import { colors, remCalc, siteMaxWidth, sitePadding } from '../../styles/vars';

const topBarHeight = 6;
const linkSidePadding = 18;
const linkVertPadding = 22;

const navStyles = css`
  position: relative;
  display: block;
  padding-top: ${remCalc(topBarHeight)};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${remCalc(topBarHeight)};
    background: ${colors.unique.topBar};
  }

  > div {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 ${sitePadding};
    max-width: ${siteMaxWidth};
    margin: 0 auto;
  }

  a {
    position: relative;
    display: block;
    margin: 0 ${remCalc(6)};
    padding: ${remCalc(linkSidePadding)} ${remCalc(linkVertPadding)};
    font-size: ${remCalc(14)};
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(50, 50, 50, 0);
    transition: all 0.36s ease-in-out;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: ${topBarHeight}px solid ${colors.unique.topBar};
      transform: scaleY(0);
      transition: transform 0.18s ease-in-out;
      transform-origin: bottom;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: ${topBarHeight}px solid ${colors.unique.topBar};
      border-top: 0;
      border-bottom: 0;
      transform: scaleY(0);
      transition: transform 0.18s ease-in-out;
      transform-origin: top;
    }

    &:hover {
      background-color: ${colors.unique.topBar};

      :after,
      :before {
        transform: scaleY(1);
      }
    }
  }
`;

export default navStyles;
