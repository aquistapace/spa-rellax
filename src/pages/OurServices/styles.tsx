import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1024px;
  margin: 2.5rem auto;
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 2.5rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 2.5rem;
  > h2 {
    font-size: 1.5rem;
  }
  > hr {
    background: ${(props) => props.theme.primaryColor};
    width: 10%;
    border: 0.25rem solid ${(props) => props.theme.primaryColor};
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  > img {
    width: 100%;
  }
`;
export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.5rem;
  justify-content: space-around;
  flex: 1;
`;

export const ImageBox = styled.div`
  display: flex;
  position: relative;
  > img {
    width: 100%;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1.5rem;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.primaryColor};
  > p > span {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.spotlightColor};
  }
`;
