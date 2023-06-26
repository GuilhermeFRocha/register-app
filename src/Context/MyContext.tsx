import { ReactNode, createContext, useEffect, useState } from "react";

interface MyContextType {
  isOpen: any;
  setIsOpen: (value: any) => void;
  // handleSetProductList: (product: any) => void;
}

export const MyContext = createContext<MyContextType>({} as MyContextType);

export const MyContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
