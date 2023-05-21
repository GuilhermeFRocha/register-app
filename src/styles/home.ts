import styled from "styled-components";



export const Container = styled.section`
  display: flex;
`;

export const NavbarContainer = styled.div`
 width: 300px;
 padding: 40px;
  height: 100vh;
  border-right: 2px solid black;
`;

export const ContainerProd = styled.div `
display: flex;

div {
  max-width: 300px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;

  img {
    max-width: 200px;
    height: 200px;
  }
}
`

export const ContainerSupp = styled.div `
display: grid;

div {
  display: flex;
  border: 2px solid black;
  justify-content: space-between;
  border-radius: 15px;
  padding: 10px;
}
`