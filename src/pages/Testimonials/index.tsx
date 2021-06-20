import React from "react";
import Title from "../../components/Title";
import { SectionId } from "../../interfaces/sectionID";
import { Container, ContentBox, Parallax } from "./styles";

const Testimonials: React.FC<SectionId> = ({id}) => {
  return (
    <Container id={id}>
      <Parallax />
      <ContentBox>
        <Title>TESTIMONIALS</Title>
        <em>
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          praesentium delectus totam. Corporis, ipsam, animi deleniti
          perferendis qui non eligendi porro pariatur saepe sunt blanditiis
          doloremque quos? Itaque, rem maiores? "
        </em>
        <span>Jhon Doe</span>
      </ContentBox>
    </Container>
  );
};

export default Testimonials;
