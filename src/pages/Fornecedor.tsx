import { Navbar } from "../components/Navbar"
import { Container, ContainerProd } from "../styles/home"
import { Formik, Form, Field,  } from 'formik';
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";

export const Fornecedor = () => {
  const { productList ,FornList,setFornList} = useContext(MyContext);

  const initialValues = {
    nome: '',
    cnpj: '',
    cep: '',
    street: '',
    state: '',
    city: '',
    products: [],
  };

  const handleSubmit = (values: any) => {
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
    setFornList([...FornList, updatedValues])
  };
  
  return (

    <Container>
      <Navbar/>

    <div>
      <h1>Cadastrar Fornecedor</h1>
    
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="nome">Nome</label>
          <Field type="text" id="nome" name="nome" />
        </div>
        <div>
          <label htmlFor="cnpj">CNPJ</label>
          <Field type="text" id="cnpj" name="cnpj" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <Field type="text" id="cep" name="cep" />
        </div>
        <div>
          <label htmlFor="street">Rua</label>
          <Field type="text" id="street" name="street" />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <Field type="text" id="state" name="state" />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <Field type="text" id="city" name="city" />
        </div>

        <div>
          <h2>Adicionar Produtos</h2>

          <ContainerProd>

          {productList.map((product) => (
              <div>
              <h2>{product.productName}</h2>
              <img src={product.photo} alt="" />
              <p>{product.description}</p>
              <div>
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

          </ContainerProd>       
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>

    </div>
    </Container>
  )
}
