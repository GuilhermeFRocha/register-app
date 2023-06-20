import { useEffect, useState } from "react";
import { ContainerProd, ContainerSupp, LinkProduct, ListProd } from "./style";
import { fetchSupply, fetchProduct } from "../../services/api";

export function Product() {
  const [supplyList, setSupplyList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchSupply()
      .then((data) => setSupplyList(data))
      .catch((error) => console.error(error));

    fetchProduct()
      .then((data) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ListProd>
      <h1>DASHBOARD</h1>

      <h2>Lista de produtos:</h2>
      <ContainerProd>
        {productList.map((product: any) => (
          <LinkProduct to={`/product/${product.id}`} key={product.id}>
            <h2>{product.productName}</h2>
            <img src={product.photo} alt="" />
            <p>{product.description}</p>
          </LinkProduct>
        ))}
      </ContainerProd>

      <h2>Lista de fornecedores:</h2>

      <ContainerSupp>
        {supplyList.map((supp: any) => (
          <div key={supp.nome}>
            <p>{supp.nome}</p>
            <span>{`Produtos: ${supp.products?.length || 0}`}</span>
          </div>
        ))}
      </ContainerSupp>
    </ListProd>
  );
}
