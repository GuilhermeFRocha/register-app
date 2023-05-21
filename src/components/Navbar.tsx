import {  NavbarContainer} from "../styles/home";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li><Link to="/"> Home</Link> </li>
        <li><Link to="/product">Novo Produto</Link></li>
        <li><Link to="/fornecedor">Novo Fornecedor</Link></li>
      </ul>
    </NavbarContainer>

  )
} 