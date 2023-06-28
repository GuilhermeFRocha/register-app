import styled from "styled-components";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalButton = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .btn-accept {
    background-color: #23a123;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.37) 0px 2px 5px 0px;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }

  .btn-refuse {
    background-color: red;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.37) 0px 2px 5px 0px;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`;
