import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionItemContainer = styled(Link)`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
    border: 1px solid black;
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ images }) => `url(${images})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  margin: 10px 10px;
`;

export const PriceContainer = styled.span`
  margin: 10px 10px;
`;
