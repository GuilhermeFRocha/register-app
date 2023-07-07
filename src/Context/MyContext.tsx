import { createContext, useState } from "react";

interface MyContextType {
  isOpen: boolean | any;
  setIsOpen: (value: any) => void;
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
