import { ReactNode, createContext, useEffect, useState } from "react";
import { mockProductList, mockSupplierList } from "../services/api";

interface MyContextType {
  productList: any[];
  setProductList: (value: any[]) => void;
  FornList: any[];
  setFornList: (value: any[]) => void;
  isOpen: any;
  setIsOpen: (value: any) => void;
  // handleSetProductList: (product: any) => void;
}

export const MyContext = createContext<MyContextType>({} as MyContextType);

export const MyContextProvider = ({ children }: any) => {
  const [productList, setProductList] = useState<any>([...mockProductList]);
  const [FornList, setFornList] = useState<any>([...mockSupplierList]);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setProductList(mockProductList)
  // },[])

  // const handleSetProductList = (product: any) => {
  //   setProductList([...productList, product])
  // }

  return (
    <MyContext.Provider
      value={{
        productList,
        setProductList,
        FornList,
        setFornList,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
