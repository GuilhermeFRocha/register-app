import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "../services/api";

export const ProductDetails = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProduct()
      .then((data) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  const { id } = useParams();

  const user: any = productList.find((fornecedor: any) => fornecedor.id === id);

  return (
    <>
      {user && (
        <div>
          <h2>Detalhes do Usuário</h2>
          <p>Nome: {user.productName}</p>
          <p>Email: {user.description}</p>
        </div>
      )}
    </>
  );
};
