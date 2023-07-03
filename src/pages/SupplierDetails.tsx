import { useEffect, useState } from "react";
import { deleteSupply, fetchSupply } from "../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  ContainerSuppDetails,
  ContentProdSupp,
  NavScreen,
} from "../styles/supplierDetails";
import { ModalConfirmation } from "../components/ModalConfirmation";
import Modal from "react-modal";
import { FormEditSupplier } from "../components/FormEditSupplier";

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

export const SupplierDetails = () => {
  const [supplyList, setSupplyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConOpen, setModalConOpen] = useState(false);
  const navigate = useNavigate();
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

  function handleEditSupply() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleDeleteSupply() {
    setModalConOpen(!modalConOpen);
  }

  function handleConfirm() {
    deleteSupply(supply.id);
    navigate("/");
  }

  function handleSubmit() {
    console.log("ok");
  }

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
              <button onClick={handleEditSupply}>
                <BiEdit />
                Editar
              </button>
              <button onClick={handleDeleteSupply}>
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
        <FormEditSupplier supply={supply} />
      </Modal>

      <ModalConfirmation
        modalisOpen={modalConOpen}
        setisClose={setModalConOpen}
        handleConfirm={handleConfirm}
        children={"excluir"}
      />
    </>
  );
};
