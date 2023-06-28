import Modal from "react-modal";
import { ModalButton, customStyles } from "./styles";

export const ModalDefault = ({ modalisOpen, setisClose, children }: any) => {
  return (
    <Modal
      isOpen={modalisOpen}
      onRequestClose={setisClose}
      contentLabel="Exemplo Modal"
      style={customStyles}
    >
      <h2>Tem certeza que deseja {children} o produto?</h2>
      <ModalButton>
        <button
          className="btn-accept"
          onClick={() => {
            console.log("oi");
          }}
        >
          Sim
        </button>
        <button className="btn-refuse">Não</button>
      </ModalButton>
    </Modal>
  );
};
