import styled from "styled-components";
import { Form } from "formik";
import { ErrorMessage } from "formik";

interface SupplierProps extends React.HTMLProps<HTMLDivElement> {
  type: string;
}

export const CardFormSupplier = styled.div`
  width: 100%;
  padding-top: 40px;

  h2 {
    text-align: center;
    padding-bottom: 40px;
    font-weight: 700;
    font-size: 2rem;
    color: #171342;
  }
`;

export const ContentSupplier = styled(Form)`
  padding: 0 80px;

  div {
    display: grid;
    padding: 10px 0;

    label {
      padding-bottom: 5px;
    }

    input {
      padding: 10px;
      font-size: 1rem;
      border-radius: 5px;
      height: max-content;
    }
  }

  button {
    width: 100%;
    background-color: rgb(130, 87, 229);
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: rgb(32, 32, 36);

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`;
export const ErrorSendSupplier = styled(ErrorMessage)`
  padding: 0 !important;
  color: red;
  padding-top: 5px !important;
`;

export const ContainerSupplier = styled.div`
  padding: 0 40px;

  .titleSupplier {
    font-size: 1.5rem;
    text-align: center;
    padding: 60px 40px;
  }
`;

export const ProductSupplier = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  justify-items: center;
  margin: 0 auto;

  .productSupplier {
    max-width: 250px;
    border: 2px solid white;
    border-radius: 20px;
    border: 2px solid black;
    padding: 20px;

    h3 {
      text-align: center;
      color: black;
      font-size: 1.2rem;
      font-weight: 500;
      padding-bottom: 15px;
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

    p {
      color: black;
      font-size: 1rem;
      font-weight: 400;
    }

    div {
      padding-top: 20px;
      display: flex;
      align-items: center;
      gap: 2px;

      input {
        cursor: pointer;
      }

      label {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;

export const ButtonSupplier = styled.button<SupplierProps>`
  display: flex;
  margin: 60px auto;
  background-color: rgb(130, 87, 229);
  border: none;
  border-radius: 15px;
  padding: 10px 40px;
  width: 25%;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  font-size: 1rem;
  color: rgb(32, 32, 36);

  &:hover {
    opacity: 0.9;
    transition: 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ContentAdress = styled.div`
  display: flex !important;
  align-items: center;
  gap: 30px;

  div {
    width: 100%;
  }
`;
