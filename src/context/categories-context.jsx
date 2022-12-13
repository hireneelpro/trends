// import { useState, createContext } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firbase.utils";
// import { useEffect } from "react";
// // import SHOP_DATA from "../shop-data";

// export const CategoriesContext = createContext({
//   categories: {},
// });
// export const CategoriesProvider = ({ children }) => {
//   const [categories, setCategories] = useState({});
//   useEffect(() => {
//     // we have to wrap getCategoriesAndDocuments in a function to get rid of promise we get with it//
//     const getCategoryMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       // console.log(categoryMap);
//       setCategories(categoryMap);
//     };
//     getCategoryMap();
//   }, []);

//   const value = { categories, setCategories };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
