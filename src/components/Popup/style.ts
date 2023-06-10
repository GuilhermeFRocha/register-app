import styled from "styled-components";

export const PopupMessage = styled.div`
  top: 20px;
  right: 20px;
  position: absolute;
  box-shadow: 1px 7px 10px 0px rgba(0, 0, 0, 0.36);
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
  }

  nav {
    width: 100%;
    margin: 10px 0 0px 0;

    span {
      height: 5px;
    }
  }
`;
