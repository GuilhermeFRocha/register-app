import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProduct, fetchProduct } from "../services/api";
import "../styles/productDetails";
import {
  BackScreen,
  ContainerProdDetails,
  DescDetails,
  FlagsDetails,
  ImgDetails,
} from "../styles/productDetails";
import { BsBoxArrowLeft } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export const ProductDetails = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct()
      .then((data) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  const { id } = useParams();

  const product: any = productList.find(
    (fornecedor: any) => fornecedor.id === id
  );

  const index = productList.findIndex(
    (fornecedor: any) => fornecedor.id === id
  );

  function handleEditProduct() {}

  async function handleDeleteProduct() {
    await deleteProduct(product.id);
    navigate("/");
  }

  return (
    <>
      {product && (
        <>
          <BackScreen>
            <Link to={"/"}>
              <BsBoxArrowLeft />
              Voltar
            </Link>

            <div>
              <button onClick={handleEditProduct}>
                <BiEdit />
                Editar
              </button>
              <button onClick={() => handleDeleteProduct()}>
                <MdDelete />
                Deletar
              </button>
            </div>
          </BackScreen>

          <h2
            style={{
              textAlign: "center",
              padding: "40px",
              fontWeight: "700",
              fontSize: "2rem",
              color: "#171342",
            }}
          >
            Detalhes do Produto
          </h2>
          <ContainerProdDetails>
            <ImgDetails>
              <img src={product.photo} alt="" />
            </ImgDetails>
            <DescDetails>
              <h3> {product.productName}</h3>
              <span>
                <strong>Descrição: </strong>
                {product.description}
              </span>
              <FlagsDetails>
                <strong>Marca: </strong>
                <p>{product.brand}</p>
              </FlagsDetails>
              <FlagsDetails>
                <strong>Quantidade: </strong>
                <p>{product.unit}</p>
              </FlagsDetails>
            </DescDetails>
          </ContainerProdDetails>
        </>
      )}
    </>
  );
};
