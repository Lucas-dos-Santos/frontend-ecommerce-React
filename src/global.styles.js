import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans Condensed", sans-serif;
    margin: 0;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ContainerGlobal = styled.div`
  padding: 20px 60px;
`;
