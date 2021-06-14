import React from "react";
import Title from "../../components/Title";

import { Container, FormWrapper, TextWrapper, Wrapper } from "./styles";

const Newsletter: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>NEWSLETTER</Title>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            praesentium delectus totam. Corporis, ipsam, animi deleniti
            perferendis qui non eligendi porro pariatur saepe sunt blanditiis
            doloremque quos? Itaque, rem maiores?
          </span>
        </TextWrapper>
        <FormWrapper>
          <input type="text" placeholder=" seu e-mail" />
          <button>Subscribe</button>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
