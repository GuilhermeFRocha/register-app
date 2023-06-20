import styled from "styled-components";

interface NavbarProps {
  isOpen: boolean;
}

export const NavbarContainer = styled.div<NavbarProps>`
  padding: 40px 20px;
  min-height: 100vh;
  box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.37);
  position: relative;
  min-width: ${({ isOpen }: any) => (isOpen ? "200px" : "20px")};
  width: ${({ isOpen }: any) => (isOpen ? "200px" : "20px")};
  transition: all 0.3s ease-in-out;

  img {
    display: flex;
    margin: 0 auto;
    padding-bottom: 25px;
    transition: all 0.2s ease-in-out;
  }

  img.hide {
    opacity: 0;
    width: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;

    li {
      padding-bottom: 10px;

      a {
        font-size: 1rem;
        color: #948d8d;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1rem;

        span {
          transition: all 0.2s ease-in-out;
        }

        span.hide {
          opacity: 0;
          pointer-events: none;
          font-size: 0;
        }

        span.active {
          font-weight: 700;
        }
      }
    }
  }
`;

export const ArrowNavbar = styled.button`
  position: absolute;
  color: rgb(130, 87, 229);
  font-size: 1.5rem;
  top: 15px;
  right: -12px;
  border: none;
  background: transparent;
  padding: 0;
  z-index: 5555555555;
  cursor: pointer;
  height: 1.5rem;
`;
