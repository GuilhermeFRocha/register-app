import Modal from "react-modal";
import { ModalButton, customStyles } from "./styles";
import { ReactNode } from "react";

interface ModalConfirmationProps {
  modalisOpen: boolean;
  setisClose: (value: boolean) => void;
  handleConfirm: () => void;
  children: ReactNode;
}

export const ModalConfirmation = ({
  modalisOpen,
  setisClose,
  handleConfirm,
  children,
}: ModalConfirmationProps) => {
  return (
    <Modal
      isOpen={modalisOpen}
      onRequestClose={() => {
        setisClose(false);
      }}
      contentLabel="Exemplo Modal"
      style={customStyles}
    >
      <h2>Tem certeza que deseja {children} o produto?</h2>
      <ModalButton>
        <button className="btn-accept" onClick={handleConfirm}>
          Sim
        </button>
        <button
          className="btn-refuse"
          onClick={() => {
            setisClose(false);
          }}
        >
          Não
        </button>
      </ModalButton>
    </Modal>
  );
};
