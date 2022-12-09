// import "./components/category-item/category-item.scss"
import { Routes, Route } from "react-router-dom";
import MainSignPage from "./components/authentication/mainsignpage/main-sign-page";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation.component";
import Shop from "../src/components/routes/shop/shop.jsx";
import CheckOut from "./components/checkout/checkout-page";
// import CartDropDown from "./components/cart-dropdown/cart-dropdown";

// const ShoppingCart = () => {
//   return <div>i am shopping cart </div>;
// };

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="mainsignpage" element={<MainSignPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
