import { useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainSignPage from "./components/authentication/mainsignpage/main-sign-page";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation.component";
import Shop from "../src/components/routes/shop/shop.jsx";
import CheckOut from "./components/checkout/checkout-page";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firbase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { setCategoriesArray } from "./store/categories/categories.action";
import { getCategoriesAndDocuments } from "./utils/firebase/firbase.utils";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const value = await getCategoriesAndDocuments();
      // console.log(value);
      dispatch(setCategoriesArray(value));
    };
    getCategories();

  }, []);

  // =======================//

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);
  // ==========================//
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
