import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import {
  AiFillHome,
  AiTwotoneShopping,
  AiOutlineSolution,
} from "react-icons/ai";
import { ArrowNavbar, NavbarContainer } from "./style";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MyContext } from "../../Context/MyContext";
import classnames from "classnames";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    const storedIsOpen = localStorage.getItem("navbarIsOpen");
    setIsOpen(storedIsOpen === "true");
  }, [setIsOpen]);

  useEffect(() => {
    localStorage.setItem("navbarIsOpen", isOpen);
  }, [isOpen]);

  const isActivePage = (path: any) => {
    return location.pathname === path;
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <ul>
        <li>
          <Link to="/">
            <AiFillHome />
            <span
              className={`${isOpen ? "show" : "hide"} ${classnames({
                active: isActivePage("/"),
              })}`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <AiTwotoneShopping />
            <span
              className={`${isOpen ? "show" : "hide"} ${classnames({
                active: isActivePage("/product"),
              })}`}
            >
              Novo produto
            </span>
          </Link>
        </li>
        <li>
          <Link to="/fornecedor">
            <AiOutlineSolution />
            <span
              className={`${isOpen ? "show" : "hide"} ${classnames({
                active: isActivePage("/fornecedor"),
              })}`}
            >
              Novo fornecedor
            </span>
          </Link>
        </li>
      </ul>
      <ArrowNavbar onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <BsFillArrowLeftCircleFill />
        ) : (
          <BsFillArrowRightCircleFill />
        )}
      </ArrowNavbar>
    </NavbarContainer>
  );
};
