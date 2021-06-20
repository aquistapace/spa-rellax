import React from "react";
import ImagePrincipal from "../../assets/image-philosophy.jpg";
import ImagePlantBase from "../../assets/plant-based.png";
import ImageCrueltyFree from "../../assets/cruelty-free.png";
import ImageOrganicLinen from "../../assets/organic-linen.png";

import { Container, TextWrapper, ImageWrapper, TextBox } from "./styles";
import Title from "../../components/Title";
import { SectionId } from "../../interfaces/sectionID";
const OurPhilosophy: React.FC<SectionId> = ({ id }) => {
  return (
    <Container id={id}>
      <ImageWrapper>
        <img src={ImagePrincipal} alt="image" />
      </ImageWrapper>

      <TextWrapper>
        <Title>OUR PHILOSOPHY</Title>
        <TextBox>
          <img src={ImagePlantBase} alt="" />
          <div>
            <h3>Lorem Ipsum</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              praesentium delectus totam. Corporis, ipsam, animi deleniti
              perferendis qui non eligendi porro pariatur saepe sunt blanditiis
              doloremque quos? Itaque, rem maiores?
            </span>
          </div>
        </TextBox>
        <TextBox>
          <img src={ImageCrueltyFree} alt="" />
          <div>
            <h3>Lorem Ipsum</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              praesentium delectus totam. Corporis, ipsam, animi deleniti
              perferendis qui non eligendi porro pariatur saepe sunt blanditiis
              doloremque quos? Itaque, rem maiores?
            </span>
          </div>
        </TextBox>
        <TextBox>
          <img src={ImageOrganicLinen} alt="" />
          <div>
            <h3>Lorem Ipsum</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              praesentium delectus totam. Corporis, ipsam, animi deleniti
              perferendis qui non eligendi porro pariatur saepe sunt blanditiis
              doloremque quos? Itaque, rem maiores?
            </span>
          </div>
        </TextBox>
      </TextWrapper>
    </Container>
  );
};

export default OurPhilosophy;
