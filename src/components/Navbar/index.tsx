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

import Logo from "../../assets/logo.svg";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    const storedIsOpen = localStorage.getItem("navbarIsOpen");
    setIsOpen(storedIsOpen === "true");
  }, [setIsOpen]);

  useEffect(() => {
    localStorage.setItem("navbarIsOpen", isOpen.toString());
  }, [isOpen]);

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <ul>
        <img
          src={Logo}
          alt=""
          width={80}
          className={`${isOpen ? "show" : "hide"}`}
        />
        <li>
          <Link to="/">
            <AiFillHome color={`${isActivePage("/") && "#8257e5"}`} />
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
            <AiTwotoneShopping
              color={`${isActivePage("/product") && "#8257e5"}`}
            />
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
            <AiOutlineSolution
              color={`${isActivePage("/fornecedor") && "#8257e5"}`}
            />
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
