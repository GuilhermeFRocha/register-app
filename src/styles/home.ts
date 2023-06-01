import styled from "styled-components";

export const Container = styled.section`
  display: flex;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ContainerHome = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`