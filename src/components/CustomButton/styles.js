import styled, { css } from 'styled-components';

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  if (props.wishlist) return wishlistStyles;
  if (props.inverted) return invertedButtonStyles;
  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${getButtonStyles}
`;

export const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const wishlistStyles = css`
  background: none;
  color: rgb(255, 94, 91);
  padding: 0;
  width: 250px !important;
  text-transform: none;

  svg path {
    fill: rgb(255, 94, 91);
  }

  &:hover {
    color: black;

    svg path {
      fill: black;
    }
  }
`;

export const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
