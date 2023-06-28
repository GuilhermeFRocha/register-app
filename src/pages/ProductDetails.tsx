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

import Modal from "react-modal";
import { Form } from "../components/Form";
import { Skeleton } from "@mui/material";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    transform: "translate(-50%, -50%)",
  },
};

export const ProductDetails = () => {
  const [productList, setProductList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct()
      .then((data: any) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const product: any = productList.find(
    (fornecedor: any) => fornecedor.id === id
  );

  function handleEditProduct() {
    setModalIsOpen(!modalIsOpen);
  }

  async function handleDeleteProduct() {
    deleteProduct(product.id);
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
              <button onClick={handleDeleteProduct}>
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
          {loading ? (
            <ContainerProdDetails>
              <ImgDetails>
                <Skeleton variant="rectangular" width={370} height={370} />
              </ImgDetails>

              <DescDetails>
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={40}
                  style={{ margin: "0 auto", marginBottom: "20px" }}
                />
                <Skeleton
                  style={{ marginBottom: "20px" }}
                  variant="rectangular"
                  width={120}
                  height={22}
                />
                <Skeleton
                  style={{ marginBottom: "20px" }}
                  variant="rectangular"
                  width={120}
                  height={22}
                />
                <Skeleton
                  style={{ marginBottom: "20px" }}
                  variant="rectangular"
                  width={120}
                  height={22}
                />
              </DescDetails>
            </ContainerProdDetails>
          ) : (
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
          )}
        </>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Exemplo Modal"
      >
        <Form product={product} />
      </Modal>
    </>
  );
};
