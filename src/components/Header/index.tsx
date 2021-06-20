import React from "react";

import { Container, Menu } from "./styles";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <strong>BEAUTY CENTER</strong>
      </div>
      <Menu>
        <nav>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </Menu>
    </Container>
  );
};

export default Header;
