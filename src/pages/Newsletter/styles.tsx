import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${(props) => props.theme.secondaryColor};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2.5rem auto;
  align-items: center;
  width: 1024px;
`;
export const TextWrapper = styled.div`
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

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  flex: 1;
  > input {
    width: 50%;
    padding: 0.5rem;
    border-radius: 4px;
    margin: 1.5rem;
  }
  > button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin: 1.5rem;
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.background};
  }
`;
