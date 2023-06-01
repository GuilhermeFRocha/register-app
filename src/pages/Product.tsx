import { Navbar } from "../components/Navbar";
import { Container } from "../styles/home";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { v4 as uuidv4 } from "uuid";
import { CardForm } from "../styles/product";

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
    photo: undefined,
    id: numericId,
  };

  const handleSubmit = (product: any) => {
    setProductList([...productList, product]);
  };

  return (
    <Container>
      <Navbar />

      <CardForm>
        <h1>Cadastrar Produto</h1>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label htmlFor="productName">Nome do Produto</label>
              <Field type="text" id="productName" name="productName" />
            </div>
            <div>
              <label htmlFor="description">Descrição</label>
              <Field type="text" id="description" name="description" />
            </div>
            <div>
              <label htmlFor="brand">Marca</label>
              <Field type="text" id="brand" name="brand" />
            </div>
            <div>
              <label htmlFor="quantity">Quantidade</label>
              <Field as="select" id="quantity" name="quantity">
                <option value="">Selecione</option>
                <option value="cm">cm</option>
                <option value="kg">kg</option>
              </Field>
            </div>
            <div>
              <label htmlFor="unit">Unidade de Medida</label>
              <Field type="text" id="unit" name="unit" />
            </div>
            <div>
              <label htmlFor="photo">Foto</label>
              <Field type="file" id="photo" name="photo" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
      </CardForm>
    </Container>
  );
};
