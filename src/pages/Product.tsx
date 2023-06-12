import { useContext, useEffect, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { CardForm, ErrorSend, FormProduct } from "../styles/product";
import { MyContext } from "../Context/MyContext";
import { Popup } from "../components/Popup";

export const Product = () => {
  const { productList, setProductList } = useContext(MyContext);
  const [showMessage, setShowMessage] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);

  const randomId = uuidv4();
  const numericId = randomId.replace(/\D/g, "");

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
      setShowMessage("success");
      setShowProgressBar(true);
    } else {
      setShowMessage("error");
      setShowProgressBar(true);
    }

    setTimeout(() => {
      setShowMessage("");
      setShowProgressBar(false);
      setProgress(0);
    }, 3000);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (showProgressBar && progress < 100) {
      timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 1
        );
      }, 18);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showProgressBar, progress]);

  return (
    <Container>
      <Navbar />

      <CardForm>
        <h2>Cadastrar Produto</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnMount
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
              <button type="submit" disabled={!isValid}>
                Enviar
              </button>
            </FormProduct>
          )}
        </Formik>

        {showMessage && (
          <Popup
            messageType={showMessage}
            progress={showProgressBar ? progress : null}
            title={"Produto"}
          />
        )}
      </CardForm>
    </Container>
  );
};
