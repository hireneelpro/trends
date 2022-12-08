import { useState, createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firbase.utils";
import { useEffect } from "react";
import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // we have to wrap getCategoriesAndDocuments in a function to get rid of promise we get with it//
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
        }
        getCategoryMap()
    },[])
  
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
