import { useState, createContext } from "react";
import PRODUCTS from "../../src/shop-data.json"
// console.log(PRODUCTS);

export const ProductsContext = createContext({
    products: []

}
)
export const ProductsProvider = ({ children }) => {
    const[products, setProducts]=useState(PRODUCTS)
    const value = {products}
    return (<ProductsContext.Provider value={value}>{children }</ProductsContext.Provider>)
}