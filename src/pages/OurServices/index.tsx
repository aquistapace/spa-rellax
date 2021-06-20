import React from "react";
import ImageService1 from "../../assets/image-services-1.jpg";
import ImageService2 from "../../assets/image-services-2.jpg";
import ImageService3 from "../../assets/image-services-3.jpg";
import Title from "../../components/Title";
import { SectionId } from "../../interfaces/sectionID";
import {
  Container,
  ContentBox,
  ImageBox,
  ImageWrapper,
  TextWrapper,
  WrapperLeft,
  WrapperRight,
} from "./styles";

const OurServices: React.FC<SectionId> = ({ id }) => {
  return (
    <Container id={id}>
      <WrapperLeft>
        <TextWrapper>
          <Title>OUR SERVICES</Title>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            praesentium delectus totam. Corporis, ipsam, animi deleniti
            perferendis qui non eligendi porro pariatur saepe sunt blanditiis
            doloremque quos? Itaque, rem maiores?
          </span>
        </TextWrapper>
        <ImageWrapper>
          <img src={ImageService1} alt="image1" />
          <ContentBox>
            <h3>Our Services</h3>
            <p>
              from <span>$100.00</span>
            </p>
          </ContentBox>
        </ImageWrapper>
      </WrapperLeft>
      <WrapperRight>
        <ImageBox>
          <img src={ImageService2} alt="image1" />
          <ContentBox>
            <h3>Our Services</h3>
            <p>
              from <span>$100.00</span>
            </p>
          </ContentBox>
        </ImageBox>
        <ImageBox>
          <img src={ImageService3} alt="image1" />
          <ContentBox>
            <h3>Our Services</h3>
            <p>
              from <span>$100.00</span>
            </p>
          </ContentBox>
        </ImageBox>
      </WrapperRight>
    </Container>
  );
};

export default OurServices;
