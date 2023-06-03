import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { Formik, Field } from "formik";
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { v4 as uuidv4 } from "uuid";
import { CardForm, ErrorSend, FormProduct } from "../styles/product";
import * as Yup from "yup";

export const Product = () => {
  const randomId = uuidv4();
  const numericId = randomId.replace(/\D/g, "");
  const { productList, setProductList } = useContext(MyContext);
  const initialValues = {
    productName: "",
    description: "",
    brand: "",
    quantity: "",
    unit: "",
    photo: "",
    id: numericId,
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Campo obrigatório"),
    description: Yup.string().required("Campo obrigatório"),
    brand: Yup.string().required("Campo obrigatório"),
    quantity: Yup.string().required("Campo obrigatório"),
    unit: Yup.string().required("Campo obrigatório"),
    photo: Yup.mixed().required("Campo obrigatório"),
  });
  const handleSubmit = (product: any) => {
    const isProductExists = productList.some(
      (item) =>
        item.productName === product.productName ||
        item.description === product.description ||
        item.photo === product.photo
    );

    if (!isProductExists) {
      setProductList([...productList, product]);
    } else {
      console.log("Produto já existe na lista");
    }
  };

  return (
    <Container>
      <Navbar />

      <CardForm>
        <h2>Cadastrar Produto</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ setFieldValue }) => (
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
                <label htmlFor="quantity">Quantidade</label>
                <Field as="select" id="quantity" name="quantity">
                  <option value="">Selecione</option>
                  <option value="cm">cm</option>
                  <option value="kg">kg</option>
                </Field>
                <ErrorSend name="quantity" component="div" />
              </div>
              <div>
                <label htmlFor="unit">Unidade de Medida</label>
                <Field type="text" id="unit" name="unit" />
                <ErrorSend name="unit" component="div" />
              </div>
              <div>
                <label htmlFor="photo">Foto</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={(event: any) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                    console.log(event);
                  }}
                />

                <ErrorSend name="photo" component="div" />
              </div>
              <button type="submit">Enviar</button>
            </FormProduct>
          )}
        </Formik>
      </CardForm>
    </Container>
  );
};
