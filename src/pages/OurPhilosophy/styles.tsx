import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
`;
export const ImageWrapper = styled.div`
  > img {
    width: 500px;
    height: 100vh;
  }
`;

export const TextBox = styled.div`
  display: flex;
  margin:1.5rem 0;
  > img {
    width: 70px;
    height: 70px;
  }
  > div {
    padding-left: 1.5rem;
    > h3 {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
