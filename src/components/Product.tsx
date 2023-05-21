import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext';
import { mockSupplierList } from '../services/api'
import { ContainerProd, ContainerSupp } from '../styles/home'


export function Product  ({products}:any)  {
  const { FornList} = useContext(MyContext);

  return (
    <div>
    <h1>HOme</h1>
    <p>Aqui voce pode construir</p>
    
    <span>Lista de produtos:</span>
    <ContainerProd>

     {products.map((product:any) => (
      <div>
        <h2>{product.productName}</h2>
        <img src={product.photo} alt="" />
        <p>{product.description}</p>
      </div>
     ))}
    
    </ContainerProd>

     <h2>Lista de fornecedores</h2>

     <ContainerSupp>
    {FornList.map((supp) => (
      <div>
          <p>{supp.nome}</p>
          <span>{`Produtos: ${supp.products.length}`}</span>
      </div>
    ))}
    </ContainerSupp>
  </div>
  )
}
