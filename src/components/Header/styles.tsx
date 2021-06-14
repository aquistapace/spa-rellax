import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding:2.5rem 3.5rem;
`;

export const Menu = styled.div`
  > nav {
    > a {
      margin-right: 1.5rem;
      color: ${(props) => props.theme.textColor};
      text-decoration: none;
      :hover {
        border-bottom: 5px solid ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;
