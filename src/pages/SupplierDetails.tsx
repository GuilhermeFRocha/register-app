import { useEffect, useState } from "react";
import { fetchSupply } from "../services/api";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { BsBoxArrowLeft } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  ContainerSuppDetails,
  ContentProdSupp,
  NavScreen,
} from "../styles/supplierDetails";

export const SupplierDetails = () => {
  const [supplyList, setSupplyList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchSupply()
      .then((data: any) => {
        setSupplyList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const supply: any = supplyList.find(
    (fornecedor: any) => fornecedor.id === id
  );

  return (
    <>
      {supply && (
        <>
          <NavScreen>
            <Link to={"/"}>
              <BsBoxArrowLeft />
              Voltar
            </Link>

            <div>
              <button>
                <BiEdit />
                Editar
              </button>
              <button>
                <MdDelete />
                Deletar
              </button>
            </div>
          </NavScreen>
          <h2
            style={{
              textAlign: "center",
              padding: "40px",
              fontWeight: "700",
              fontSize: "2rem",
              color: "#171342",
            }}
          >
            Detalhes do Fornecedor
          </h2>
          <ContainerSuppDetails>
            <div className="supply-info">
              <p>Nome: {supply.nome}</p>
              <p>CNPJ: {supply.cnpj}</p>
              <p>CEP: {supply.cep}</p>
              <p>Cidade: {supply.city}</p>
              <p>Estado: {supply.state}</p>
              <p>Endereço: {supply.street}</p>
            </div>

            <h2
              style={{
                textAlign: "center",
                padding: "40px",
                fontWeight: "700",
                fontSize: "2rem",
                color: "#171342",
              }}
            >
              Produtos do Fornecedor
            </h2>

            <ContentProdSupp>
              {supply.products.length > 0 ? (
                supply.products.map((item: any) => (
                  <div>
                    <h2>{item.productName}</h2>
                    <img src={item.photo} />
                    <p>{item.description}</p>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    position: "absolute",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  Não possui produtos cadastrados!
                </p>
              )}
            </ContentProdSupp>
          </ContainerSuppDetails>

          <div></div>
        </>
      )}
    </>
  );
};
