import React from "react";
import ImagePrincipal from "../../assets/image-contact.jpg";
import Title from "../../components/Title";
import { SectionId } from "../../interfaces/sectionID";
import { Container, ContentWrapper, ImageWrapper } from "./styles";

const ContactUs: React.FC<SectionId> = ({ id }) => {
  return (
    <Container id={id}>
      <ImageWrapper>
        <img src={ImagePrincipal} alt="image principal" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>CONTACT US</Title>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          praesentium delectus totam. Corporis, ipsam, animi deleniti
          perferendis qui non eligendi porro pariatur saepe sunt blanditiis
          doloremque quos? Itaque, rem maiores?
        </span>
      </ContentWrapper>
    </Container>
  );
};

export default ContactUs;
