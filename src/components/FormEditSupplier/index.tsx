import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import {
  ButtonSupplier,
  ContainerSupplier,
  ContentAdress,
  ContentSupplier,
  ErrorSendSupplier,
  ProductSupplier,
} from "./styles";
import { Skeleton } from "@mui/material";
import { fetchProduct, updateSupply } from "../../services/api";
import { ModalConfirmation } from "../ModalConfirmation";

interface Product {
  id: string;
  productName: string;
  description: string;
  photo: string;
}

interface ProductSupply {
  nome: string;
  cnpj: string;
  cep: string;
  street: string;
  state: string;
  city: string;
  products: Product[];
}

interface FormEditSupplierProps {
  supply: ProductSupply;
}

export const FormEditSupplier = ({ supply }: FormEditSupplierProps) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [modalConOpen, setModalConOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newSupply, setNewSupply] = useState({});

  const initialValues = {
    nome: supply && supply.nome ? supply.nome : "",
    cnpj: supply && supply.cnpj ? supply.cnpj : "",
    cep: supply && supply.cep ? supply.cep : "",
    street: supply && supply.street ? supply.street : "",
    state: supply && supply.state ? supply.state : "",
    city: supply && supply.city ? supply.city : "",
    products: productList.map((product: Product) => {
      return {
        id: product.id,
        productName: product.productName,
        description: product.description,
        photo: product.photo,
      };
    }),
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O nome é obrigatório"),
    cnpj: Yup.string()
      .required("O CNPJ é obrigatório.")
      .min(15, "O campo deve ter no minimo 15 caracteres"),
    cep: Yup.string()
      .required("O Cep é obrigatório.")
      .min(8, "O campo deve ter no minimo 8 caracteres"),
    street: Yup.string().required("A rua é obrigatória"),
    state: Yup.string().required("O estado é obrigatório"),
    city: Yup.string().required("A cidade é obrigatória"),
  });

  function formatCNPJ(value: string) {
    const cnpj = value;
    const formattedCnpj = cnpj
      .replace(/[^\d]/g, "")
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

    return formattedCnpj;
  }

  function formatCEP(value: string) {
    const cep = value;
    const formattedcep = cep
      .replace(/[^\d]/g, "")
      .replace(/(\d{5})(\d{3})/, "$1-$2");

    return formattedcep;
  }

  useEffect(() => {
    fetchProduct()
      .then((data: any) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSubmit(newSupply: ProductSupply) {
    setModalConOpen(!modalConOpen);
    setNewSupply(newSupply);
  }

  function handleConfirm() {
    const updatedSupply = { ...supply, ...newSupply };
    updateSupply(updatedSupply);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {({ isValid, setFieldValue, values }) => (
          <Form>
            <ContentSupplier>
              <ContentAdress>
                <div>
                  <label htmlFor="nome">Nome</label>
                  <Field type="text" id="nome" name="nome" />
                  <ErrorSendSupplier name="nome" component="div" />
                </div>
                <div>
                  <label htmlFor="cnpj">CNPJ</label>
                  <Field
                    type="text"
                    id="cnpj"
                    maxLength={18}
                    name="cnpj"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const formattedValue = formatCNPJ(e.target.value);
                      setFieldValue("cnpj", formattedValue);
                    }}
                  />
                  <ErrorSendSupplier name="cnpj" component="div" />
                </div>
              </ContentAdress>
              <ContentAdress>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <Field
                    type="text"
                    id="cep"
                    name="cep"
                    maxLength={9}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const formattedValue = formatCEP(e.target.value);
                      setFieldValue("cep", formattedValue);
                    }}
                  />
                  <ErrorSendSupplier name="cep" component="div" />
                </div>
                <div>
                  <label htmlFor="street">Rua</label>
                  <Field type="text" id="street" name="street" />
                  <ErrorSendSupplier name="street" component="div" />
                </div>
              </ContentAdress>
              <ContentAdress>
                <div>
                  <label htmlFor="state">Estado</label>
                  <Field type="text" id="state" name="state" />
                  <ErrorSendSupplier name="state" component="div" />
                </div>
                <div>
                  <label htmlFor="city">Cidade</label>
                  <Field type="text" id="city" name="city" />
                  <ErrorSendSupplier name="city" component="div" />
                </div>
              </ContentAdress>
            </ContentSupplier>
            <ContainerSupplier>
              <h2
                style={{
                  textAlign: "center",
                  padding: "0px 0px 30px 0px",
                  fontWeight: "700",
                  fontSize: "1.4rem",
                  color: "#171342",
                }}
              >
                Produtos
              </h2>
              <ProductSupplier>
                {loading ? (
                  <>
                    <div>
                      <Skeleton variant="text" width={115} height={20} />
                    </div>

                    <div>
                      <Skeleton variant="text" width={115} height={20} />
                    </div>

                    <div>
                      <Skeleton variant="text" width={115} height={20} />
                    </div>
                  </>
                ) : (
                  productList.map((product: Product) => (
                    <div key={product.id} className="productSupplier">
                      <h3>{product.productName}</h3>

                      <div style={{ border: "none" }}>
                        <Field
                          type="checkbox"
                          id={product.id}
                          name="products"
                          value={product}
                          checked={values.products.includes(product)}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            if (e.target.checked) {
                              setFieldValue("products", [
                                ...values.products,
                                product,
                              ]);
                            } else {
                              setFieldValue(
                                "products",
                                values.products.filter(
                                  (selectedProduct: Product) =>
                                    selectedProduct.id !== product.id
                                )
                              );
                            }
                          }}
                        />
                        <label htmlFor={product.id}></label>
                      </div>
                    </div>
                  ))
                )}
              </ProductSupplier>
            </ContainerSupplier>

            <ButtonSupplier
              type="submit"
              disabled={!isValid || values.products.length <= 0}
            >
              Enviar
            </ButtonSupplier>
          </Form>
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
