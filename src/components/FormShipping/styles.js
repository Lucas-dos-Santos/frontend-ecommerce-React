import styled from 'styled-components';

export const FormShippingContainer = styled.form`
  display: flex;

  button {
    width: auto;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background: none;
  }

  button:hover {
    color: rgb(255,94,91);
  }

  input {
    margin: 0 10px;
    width: 40%;
  }

  input:focus {
    outline: none;
  }
`;
