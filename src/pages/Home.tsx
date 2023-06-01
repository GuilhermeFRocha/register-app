import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Product } from "../components/ProductsList";
import { MyContext } from "../Context/MyContext";
import { Container } from "../styles/home";

export default function Home() {
  const { productList } = useContext(MyContext);

  return (
    <Container>
      <Navbar />

      <Product products={productList} />
    </Container>
  );
}
