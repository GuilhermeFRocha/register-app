import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Product } from "../components/ProductsList";
import { Container } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Navbar />

      <Product />
    </Container>
  );
}
