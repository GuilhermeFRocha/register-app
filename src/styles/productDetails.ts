import styled from "styled-components";

export const ContainerProdDetails = styled.div`
  display: flex;
  gap: 80px;
  width: 80%;
  margin: 0 auto;
`;

export const BackScreen = styled.div`
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

export const ImgDetails = styled.div`
  width: 100%;

  img {
    box-shadow: rgba(0, 0, 0, 0.37) 0px 10px 20px 0px;
    border-radius: 15px;
    width: 80%;
  }
`;

export const DescDetails = styled.div`
  width: 100%;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding-bottom: 20px;
  }

  span {
    font-size: 1.1rem;
    color: rgb(128, 128, 128);

    strong {
      font-weight: 500;
    }
  }

  div {
    display: flex;
    gap: 15;
    padding-top: 20px;
  }
`;

export const FlagsDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  strong {
    font-weight: 500;
    font-size: 1.1rem;
    color: rgb(128, 128, 128);
  }

  p {
    padding: 7px 10px;
    background-color: rgb(130, 87, 229);
    box-shadow: rgba(0, 0, 0, 0.37) 0px 2px 5px 0px;
    border-radius: 5px;
    width: max-content;
    color: #fff;
  }
`;
