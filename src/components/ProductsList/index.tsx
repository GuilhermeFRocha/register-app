import { useEffect, useState } from "react";
import { ContainerProd, ContainerSupp, LinkProduct, ListProd } from "./style";
import { fetchSupply, fetchProduct } from "../../services/api";
import { Skeleton } from "@mui/material";

export function Product() {
  const [supplyList, setSupplyList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSupply()
      .then((data: any) => setSupplyList(data))
      .catch((error) => console.error(error));

    fetchProduct()
      .then((data: any) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ListProd>
      <h1>DASHBOARD</h1>

      <h2>Lista de produtos:</h2>
      <ContainerProd>
        {loading ? (
          <>
            <div>
              <Skeleton variant="text" width={250} height={34} />
              <Skeleton variant="rectangular" width={250} height={215} />
              <Skeleton variant="text" width={250} height={80} />
              <Skeleton variant="text" width={250} height={40} />
            </div>

            <div>
              <Skeleton variant="text" width={250} height={34} />
              <Skeleton variant="rectangular" width={250} height={215} />
              <Skeleton variant="text" width={250} height={80} />
              <Skeleton variant="text" width={250} height={40} />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Skeleton variant="text" width={250} height={34} />
              <Skeleton variant="rectangular" width={250} height={215} />
              <Skeleton variant="text" width={250} height={80} />
              <Skeleton variant="text" width={250} height={40} />
            </div>
          </>
        ) : (
          productList.map((product: any) => (
            <LinkProduct to={`/product/${product.id}`} key={product.id}>
              <h2>{product.productName}</h2>
              <img src={product.photo} alt="" />
              <p>{product.description}</p>
            </LinkProduct>
          ))
        )}
      </ContainerProd>

      <h2>Lista de fornecedores:</h2>

      <ContainerSupp>
        {loading ? (
          <>
            <Skeleton variant="text" width={"100%"} height={40} />

            <Skeleton variant="text" width={"100%"} height={40} />

            <Skeleton variant="text" width={"100%"} height={40} />

            <Skeleton variant="text" width={"100%"} height={40} />
          </>
        ) : (
          supplyList.map((supp: any) => (
            <div key={supp.id}>
              <p>{supp.nome}</p>
              <span>{`Produtos: ${supp.products.length || 0}`}</span>
            </div>
          ))
        )}
      </ContainerSupp>
    </ListProd>
  );
}
