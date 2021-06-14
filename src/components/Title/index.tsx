import React from "react";

import { Container } from "./styles";

const Title: React.FC = ({ children }) => {
  return (
    <Container>
      <h2>{children}</h2>
      <hr />
    </Container>
  );
};

export default Title;
