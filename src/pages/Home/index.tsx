import React from "react";
import ImagePrincipal from "../../assets/image-home.png";
import Title from "../../components/Title";

import {
  Container,
  TitleWrapper,
  TextWrapper,
  ImageWrapper,
  CircleWrapper,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <span>WELCOME</span>
          <p>BEAUTY CENTER</p>
        </TitleWrapper>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          praesentium delectus totam.
        </span>
      </TextWrapper>

      <ImageWrapper>
        <CircleWrapper />
        <img src={ImagePrincipal} alt="image principal" />
      </ImageWrapper>
    </Container>
  );
};

export default Home;
