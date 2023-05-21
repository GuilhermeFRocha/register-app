import styled from "styled-components";

export const ContentPost = styled.div`
  background-color: #0b1b2b;
  padding: 32px 40px;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;
export const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    line-height: 19px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: #3294f8;
      text-transform: uppercase;
    }
  }
`;

export const TitlePost = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #e7edf4;
  line-height: 31px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const BodyPost = styled.div`
  width: 90%;
  margin: 40px auto 0 auto;

  p {
    font-size: 16px;
    font-weight: 700;
    color: #afc2d4;
    line-height: 26px;
  }
`;
