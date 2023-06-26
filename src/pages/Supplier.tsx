import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { Formik, Field, Form, FormikProps } from "formik";
import { useEffect, useState, useRef } from "react";
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
import { createSupply, fetchProduct, fetchSupply } from "../services/api";
import { Skeleton } from "@mui/material";

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

interface Product {
  id: string;
  productName: string;
  description: string;
  photo: string;
  productId: string;
}

interface FormValues {
  nome: string;
  cnpj: string;
  cep: string;
  street: string;
  state: string;
  city: string;
  products: string[];
}

export const Supplier = () => {
  const [showMessage, setShowMessage] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [productList, setProductList] = useState<Product[]>([]);
  const [supplyList, setSupplyList] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialValues = {
    nome: "",
    cnpj: "",
    cep: "",
    street: "",
    state: "",
    city: "",
    products: [],
  };

  const formikRef = useRef<FormikProps<FormValues>>(null);

  useEffect(() => {
    fetchSupply()
      .then((data) => {
        setSupplyList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchProduct()
      .then((data) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

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

  const handleSubmit = (values: FormValues) => {
    const isProductExists = supplyList.some(
      (item: any) => item.nome === values.nome || item.cnpj === values.cnpj
    );

    if (!isProductExists && values.products.length > 0) {
      const selectedProducts = values.products.map((productId: string) => {
        const product = productList.find((p: Product) => p.id === productId);
        return {
          id: productId,
          productName: product!.productName,
          description: product!.description,
          photo: product!.photo,
        };
      });

      const updatedValues = { ...values, products: selectedProducts };
      createSupply([...supplyList, updatedValues]);
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

  console.log(loading);

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
          innerRef={formikRef}
        >
          {({ isValid, setFieldValue, values }) => (
            <Form>
              <ContentSupplier>
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
                <h3 className="titleSupplier">Adicionar Produtos</h3>

                <ProductSupplier>
                  {loading ? (
                    <>
                      <div>
                        <Skeleton variant="text" width={250} height={34} />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={215}
                        />
                        <Skeleton variant="text" width={250} height={80} />
                        <Skeleton variant="text" width={250} height={40} />
                      </div>

                      <div>
                        <Skeleton variant="text" width={250} height={34} />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={215}
                        />
                        <Skeleton variant="text" width={250} height={80} />
                        <Skeleton variant="text" width={250} height={40} />
                      </div>

                      <div>
                        <Skeleton variant="text" width={250} height={34} />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={215}
                        />
                        <Skeleton variant="text" width={250} height={80} />
                        <Skeleton variant="text" width={250} height={40} />
                      </div>
                    </>
                  ) : (
                    productList.map((product: Product) => (
                      <div key={product.id} className="productSupplier">
                        <h3>{product.productName}</h3>
                        <img src={product.photo} alt="produto" />
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
