import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const Images = styled.div`
  width: 10%;
  height: 400px;
`;
export const MiniImage = styled.div`
  transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  width: 115px;
  height: 100px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
  background-image: ${({ images }) => `url(${images})`};
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 430px;
  overflow: hidden;

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

export const AddButton = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  svg {
    margin: 0 10px;
    width: 20px;
    fill: white;
  }

  &:hover {
    svg {
      fill: black;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ images }) => `url(${images})`};
`;

export const SideRightContainer = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 100%;
  font-size: 30px;
  text-align: center;
`;

export const PriceContainer = styled.span`
  font-size: 24px;
`;
