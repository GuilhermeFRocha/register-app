import { Field, Formik, FormikProps } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { ErrorSend, FormProduct } from "./styles";
import { updateProduct } from "../../services/api";
import { CircularProgress } from "@mui/material";
import { ModalConfirmation } from "../ModalConfirmation";

const validationSchema = Yup.object().shape({
  productName: Yup.string().required("O nome é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  brand: Yup.string().required("A marca é obrigatória"),
  unit: Yup.string().required("A unidade é obrigatória"),
  quantity: Yup.string().required("A quantidade é obrigatória"),
  photo: Yup.mixed().required("A foto é obrigatória"),
});

interface ProductFormValues {
  productName: string;
  description: string;
  brand: string;
  unit: string;
  quantity: string;
  photo: File | null;
}

export const FormEditProduct = ({ product }: any) => {
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalConOpen, setModalConOpen] = useState(false);
  const [newproduct, setNewProduct] = useState({});

  const formikRef = useRef<FormikProps<ProductFormValues>>(null);

  function handleSubmit(newproduct: any) {
    setModalConOpen(!modalConOpen);
    setNewProduct(newproduct);
  }

  function handleConfirm() {
    setLoading(false);
    const updatedProduct = { ...product, ...newproduct, photo: photoURL };
    updateProduct(updatedProduct);
  }

  const initialValues = {
    productName: product && product.productName ? product.productName : "",
    description: product && product.description ? product.description : "",
    brand: product && product.brand ? product.brand : "",
    unit: product && product.unit ? product.unit : "",
    quantity: product && product.quantity ? product.quantity : "",
    photo: null,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        innerRef={formikRef}
      >
        {({ setFieldValue, isValid }) => (
          <FormProduct>
            <div>
              <label htmlFor="productName">Nome do Produto</label>
              <Field type="text" id="productName" name="productName" />
              <ErrorSend name="productName" component="div" />
            </div>
            <div>
              <label htmlFor="description">Descrição</label>
              <Field type="text" id="description" name="description" />
              <ErrorSend name="description" component="div" />
            </div>
            <div>
              <label htmlFor="brand">Marca</label>
              <Field type="text" id="brand" name="brand" />
              <ErrorSend name="brand" component="div" />
            </div>
            <div>
              <label htmlFor="unit">Unidade de Medida</label>
              <Field as="select" id="unit" name="unit">
                <option value="">Selecione</option>
                <option value="cm">cm</option>
                <option value="kg">kg</option>
              </Field>
              <ErrorSend name="unit" component="div" />
            </div>
            <div>
              <label htmlFor="quantity">Quantidade</label>
              <Field type="number" id="quantity" name="quantity" />
              <ErrorSend name="quantity" component="div" />
            </div>
            <div>
              <label htmlFor="photo">Foto</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const file = event.currentTarget.files?.[0];
                  setFieldValue("photo", file);
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setPhotoURL(e.target?.result as string);
                  };
                  reader.readAsDataURL(file!);
                }}
              />

              <ErrorSend name="photo" component="div" />
            </div>
            <button type="submit" disabled={!isValid}>
              {loading ? (
                "Enviar"
              ) : (
                <CircularProgress color="inherit" size={16} />
              )}
            </button>
          </FormProduct>
        )}
      </Formik>

      <ModalConfirmation
        modalisOpen={modalConOpen}
        setisClose={setModalConOpen}
        handleConfirm={handleConfirm}
        children={"alterar"}
      />
    </>
  );
};
