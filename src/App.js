import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainSignPage from "./components/authentication/mainsignpage/main-sign-page";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation.component";
import Shop from "../src/components/routes/shop/shop.jsx";
import CheckOut from "./components/checkout/checkout-page";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utils/firebase/firbase.utils";

const App = () => {
 useEffect(() => {
   const unSubscribe = onAuthStateChangedListener((user) => {
     // console.log(user);
     setCurrentUser(user);
     
   });
   return unSubscribe;
 }, []);



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
