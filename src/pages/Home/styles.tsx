import styled, { keyframes } from "styled-components";
import {bounce, fadeInRight} from "react-animations";
const bounceAnimation = keyframes`${fadeInRight}`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  > span {
    letter-spacing: 1rem;
    font-size: 3.375rem;
    font-weight: bold;
    color: ${(props) => props.theme.secondaryColor};
  }
  > p {
    position: absolute;
    font-size: 2.25rem;
    font-weight: bold;
    top: 50%;
    left: 10%;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding: 4.5rem;
`;
export const ImageWrapper = styled.div`
  flex: 2;
  position: relative;
  > img {
    width: 100%;
    animation: 2s ${bounceAnimation};
  }
`;

export const CircleWrapper = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primaryColor};
  clip-path: circle(650px at right 700px);
  animation: 0.5s ${bounceAnimation};
`;
