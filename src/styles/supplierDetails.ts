import styled from "styled-components";

export const NavScreen = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    color: black;
    font-weight: 500;

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }

  div {
    display: flex;
    gap: 30px;

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      border: none;
      font-size: 16px;
      box-shadow: rgba(0, 0, 0, 0.37) 0px 2px 5px 0px;
      border-radius: 5px;
      padding: 5px 10px;
      color: #000;
      font-weight: 500;

      &:hover {
        opacity: 0.8;
        transition: 0.2s;
      }
    }
  }
`;

export const ContainerSuppDetails = styled.div`
  width: 80%;
  margin: 0 auto;

  .supply-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px 10px;
    gap: 25px;
    margin-bottom: 40px;
  }
`;

export const ContentProdSupp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
  margin: 0px auto;

  div {
    max-width: 250px;
    border-radius: 20px;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 40px;

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
  }
`;
