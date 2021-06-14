import styled from "styled-components";

import ImagePrincipal from "../../assets/image-testimonials.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Parallax = styled.div`
  background-image: url(${ImagePrincipal});
  min-height: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 30%;
  top: 30%;
  padding: 2.5rem;
  background: ${(props) => props.theme.primaryColor};
  > span {
    padding-top: 0.5rem;
    font-size: 1.5rem;
  }
`;
