import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const SocialContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    margin-right: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 33%;
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
