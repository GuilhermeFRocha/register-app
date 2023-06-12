import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { Formik, Field, Form } from "formik";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import {
  ButtonSupplier,
  CardFormSupplier,
  ContainerSupplier,
  ContentAdress,
  ContentSupplier,
  ErrorSendSupplier,
  ProductSupplier,
} from "../styles/supplier";
import * as Yup from "yup";
import { Popup } from "../components/Popup";

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  cnpj: Yup.string().required("Campo obrigatório"),
  cep: Yup.string().required("Campo obrigatório"),
  street: Yup.string().required("Campo obrigatório"),
  state: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
});

export const Supplier = () => {
  const { productList, FornList, setFornList } = useContext(MyContext);
  const [showMessage, setShowMessage] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);

  const initialValues = {
    nome: "",
    cnpj: "",
    cep: "",
    street: "",
    state: "",
    city: "",
    products: [],
  };

  const handleSubmit = (values: any) => {
    const isProductExists = FornList.some(
      (item) => item.nome === values.nome || item.cnpj === values.cnpj
    );

    if (!isProductExists) {
      const selectedProducts = values.products.map((productId: string) => {
        const product = productList.find((p) => p.id === productId);
        return {
          id: productId,
          productName: product.productName,
          description: product.description,
          photo: product.photo,
        };
      });

      const updatedValues = { ...values, products: selectedProducts };
      setFornList([...FornList, updatedValues]);
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

      <CardFormSupplier>
        <h2>Cadastrar Fornecedor</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isValid }) => (
            <Form>
              <ContentSupplier>
                <div>
                  <label htmlFor="nome">Nome</label>
                  <Field type="text" id="nome" name="nome" />
                  <ErrorSendSupplier name="nome" component="div" />
                </div>
                <div>
                  <label htmlFor="cnpj">CNPJ</label>
                  <Field type="text" id="cnpj" name="cnpj" />
                  <ErrorSendSupplier name="cnpj" component="div" />
                </div>
                <ContentAdress>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <Field type="text" id="cep" name="cep" />
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
                <h3 className="titleSupplier">Adicionar Produtos</h3>

                <ProductSupplier>
                  {productList.map((product) => (
                    <div key={product.id} className="productSupplier">
                      <h3>{product.productName}</h3>
                      <img src={product.photo} alt="" />
                      <p>{product.description}</p>
                      <div style={{ border: "none" }}>
                        <Field
                          type="checkbox"
                          id={product.id}
                          name="products"
                          value={product.id}
                        />
                        <label htmlFor={product.productId}>Selecionar</label>
                      </div>
                    </div>
                  ))}
                </ProductSupplier>
              </ContainerSupplier>
              <ButtonSupplier type="submit" disabled={!isValid}>
                Enviar
              </ButtonSupplier>
            </Form>
          )}
        </Formik>
        {showMessage && (
          <Popup
            messageType={showMessage}
            progress={showProgressBar ? progress : null}
            title={"Fornecedor"}
          />
        )}
      </CardFormSupplier>
    </Container>
  );
};
