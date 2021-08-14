import { css } from "@linaria/core";
import { colors } from "../../styles/vars";

export const modalStyles = {
  parent: css`
    position: fixed;
    display: flex;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
  `,
  inner: css`
    position: relative;
    width: 55%;
    height: 75%;
    background: ${colors.light};
    color: ${colors.dark};
  `
}