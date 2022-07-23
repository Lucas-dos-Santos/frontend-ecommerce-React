import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const Images = styled.div`
  width: 10%;
  height: 400px;
`;
export const MiniImage = styled.div`
  transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 400px;
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
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 220px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const SideRightContainer = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 100%;
  font-size: 40px;
  line-height: 20px;
`;

export const PriceContainer = styled.span`
`;
