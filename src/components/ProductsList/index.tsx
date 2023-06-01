import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { ContainerProd, ContainerSupp, LinkProduct, ListProd } from "./style";

export function Product({ products }: any) {
  const { FornList } = useContext(MyContext);

  return (
    <ListProd>
      <h1>DASHBOARD</h1>

      <h2>Lista de produtos:</h2>
      <ContainerProd>
        {products.map((product: any) => (
          <LinkProduct to={`/product/${product.id}`} key={product.id}>
            <h2>{product.productName}</h2>
            <img src={product.photo} alt="" />
            <p>{product.description}</p>
          </LinkProduct>
        ))}
      </ContainerProd>

      <h2>Lista de fornecedores:</h2>

      <ContainerSupp>
        {FornList.map((supp) => (
          <div key={supp.nome}>
            <p>{supp.nome}</p>
            <span>{`Produtos: ${supp.products.length}`}</span>
          </div>
        ))}
      </ContainerSupp>
    </ListProd>
  );
}
