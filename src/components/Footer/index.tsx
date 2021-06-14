import React from "react";

import {
  Container,
  TextWrapper,
  SocialMediaWrapper,
  WrapperLeft,
  WrapperRight,
  Wrapper,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperLeft>
          <TextWrapper>
            <h2>Beauty Center</h2>
            <span>Av. Lorem Ipsum , 300</span>
            <span>(00) 1234-5678</span>
          </TextWrapper>
          <TextWrapper>
            <a href="">Our Services</a>
            <a href="">Our Philosophy</a>
            <a href="">Newsletter</a>
            <a href="">Contact Us</a>
          </TextWrapper>
        </WrapperLeft>
        <WrapperRight>
          <SocialMediaWrapper>
            <div></div>
          </SocialMediaWrapper>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
};

export default Footer;
