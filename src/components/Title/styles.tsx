import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  flex: 1;
  > h2 {
    font-size: 1.5rem;
  }
  > hr {
    background: ${(props) => props.theme.primaryColor};
    width: 10%;
    border: 0.25rem solid ${(props) => props.theme.primaryColor};
  }
`;
