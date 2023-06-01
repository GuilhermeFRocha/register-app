import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListProd = styled.div`
  padding: 40px;

  width: 100%;
  h1 {
    text-align: center;
    padding-bottom: 40px;
    font-weight: 700;
    font-size: 2rem;
    color: #171342;
  }

  span {
    display: block;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
  }

  h2 {
    display: block;
    padding-bottom: 20px;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
  }
`;

export const ContainerProd = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  justify-items: center;
  margin: 0 auto;
`;

export const LinkProduct = styled(Link)`
  max-width: 250px;
  border: 2px solid white;
  border-radius: 20px;
  border: 2px solid black;
  padding: 20px;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }

  img {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    padding-bottom: 15px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }

  h2 {
    text-align: center;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 15px;
  }

  p {
    color: black;
    font: 1rem;
    font-weight: 400;
  }
`;

export const ContainerSupp = styled.div`
  display: grid;
  row-gap: 10px;

  div {
    display: flex;
    border: 2px solid black;
    justify-content: space-between;
    border-radius: 15px;
    padding: 10px;

    p {
      color: black;
      font-size: 14px;
    }

    span {
      color: black;
      font-size: 14px;

    }
  }
`;
