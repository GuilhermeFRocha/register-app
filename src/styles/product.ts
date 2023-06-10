import styled from "styled-components";
import { Form } from "formik";
import { ErrorMessage } from "formik";

export const CardForm = styled.div`
  width: 100%;
  padding: 40px 0;
  position: relative;

  h2 {
    text-align: center;
    padding-bottom: 40px;
    font-weight: 700;
    font-size: 2rem;
    color: #171342;
  }
`;

export const FormProduct = styled(Form)`
  width: max-content;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  border: 2px solid black;
  padding: 40px;
  background-color: rgb(32, 32, 36);
  border-radius: 5px;

  div {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 25px;
    flex-direction: column;
    margin: 0 auto;

    label {
      color: rgb(255, 255, 255);
      font-size: 1rem;
    }

    input {
      border-radius: 5px;
      font-size: 1rem;
      background: rgb(18, 18, 20);
      border-color: rgb(18, 18, 20);
      color: rgb(255, 255, 255);
      padding: 5px;
    }

    select {
      border-radius: 5px;
      font-size: 0.8rem;
      padding: 2px;
      background: rgb(18, 18, 20);
      border-color: rgb(18, 18, 20);
      color: rgb(255, 255, 255);
    }

    #photo {
      background-color: transparent;
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
  }
`;
export const ErrorSend = styled(ErrorMessage)`
  padding: 0 !important;
  color: red;
`