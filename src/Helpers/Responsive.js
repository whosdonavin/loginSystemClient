import { css } from "styled-components";

export const SmallScreen = (props) => {
  return css`
    @media (max-width: 839px) {
      ${props}
    }
  `;
};
