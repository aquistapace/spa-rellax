import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.background};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
  > a {
    color: ${(props) => props.theme.background};
    text-decoration: none;
    line-height: 1.5rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem;
`;

export const WrapperLeft = styled.div`
  display: flex;
  justify-content: start;
  margin: 2.5rem;
`;

export const WrapperRight = styled.div`
  display: flex;
  justify-self: flex-end;
  margin: 2.5rem;
  background: ${(props) => props.theme.primaryColor};
`;
