import { createContext, useState } from "react";

export const ContextCart = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <ContextCart.Provider value={{ cart, setCart }}>
      {children}
    </ContextCart.Provider>
  );
}
