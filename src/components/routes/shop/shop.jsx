import { Routes, Route } from "react-router-dom";
import MainShop from "./main-shop";
import CategoryShop from "./category-shop";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainShop />} />
        <Route path=":category" element={<CategoryShop />} />
        {/* <Route path="/*" element={<CategoryShop />} /> */}
      </Routes>
    </>
  );
};
export default Shop;
