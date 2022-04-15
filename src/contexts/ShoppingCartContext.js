import { createContext } from "react";

const ShoppingCartContext = createContext([]);

export const ShoppingCartProvider = ShoppingCartContext.Provider;

export default ShoppingCartContext;
