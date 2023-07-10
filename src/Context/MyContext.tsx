import { createContext, useState } from "react";

interface MyContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const MyContext = createContext<MyContextType>({} as MyContextType);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
