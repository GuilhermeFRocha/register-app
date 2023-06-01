import { useParams } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import { useContext } from "react";

export const ProductDetails = () => {
  const { productList } = useContext(MyContext);
  const { id } = useParams();

  const user = productList.find((fornecedor) => fornecedor.id === id);

  if (!user) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>Nome: {user.productName}</p>
      <p>Email: {user.description}</p>
      {/* Renderizar outras informações relevantes */}
    </div>
  );
};
