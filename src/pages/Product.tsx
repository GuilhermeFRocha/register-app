import { useEffect, useState, useRef } from "react";
import { Formik, Field, FormikProps } from "formik";
import * as Yup from "yup";

import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { CardForm, ErrorSend, FormProduct } from "../styles/product";
import { Popup } from "../components/Popup";
import { createProduct, fetchProduct } from "../services/api";

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

export const Product = () => {
  const [showMessage, setShowMessage] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [productList, setProductList] = useState([]);
  const [photoURL, setPhotoURL] = useState("");

  const initialValues = {
    productName: "",
    description: "",
    brand: "",
    unit: "",
    quantity: "",
    photo: null,
  };

  useEffect(() => {
    fetchProduct()
      .then((data: any) => {
        setProductList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const formikRef = useRef<FormikProps<ProductFormValues>>(null);

  const handleSubmit = (product: ProductFormValues) => {
    const isProductExists = productList.some(
      (item: ProductFormValues) =>
        item.productName === product.productName ||
        item.description === product.description ||
        item.photo === product.photo
    );

    if (!isProductExists) {
      const updatedProduct = { ...product, photo: photoURL };
      createProduct(updatedProduct);
      setShowMessage("success");
      setShowProgressBar(true);

      if (formikRef.current) {
        formikRef.current.resetForm();
      }
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
