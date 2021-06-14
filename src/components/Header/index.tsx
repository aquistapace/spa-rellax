import React from "react";

import { Container,Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>Logo</div>
      <Menu>
        <nav>
          <a href="home">Home</a>
          <a href="our-philosophy">About Us</a>
          <a href="our-services">Services</a>
          <a href="contact">Contact</a>
        </nav>
      </Menu>
    </Container>
  );
};

export default Header;
