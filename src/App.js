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
import { useDispatch, useSelector } from "react-redux";
// import { setCategoriesArray } from "./store/categories/categories.action";
// import { getCategoriesAndDocuments } from "./utils/firebase/firbase.utils";
import { fetchCategoriesAsync } from "./store/categories/categories.action";
import Spinner from "./components/spinner/spinner";
import { categoriesIsLoading } from "./store/categories/categories.selector";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, []);

  const isLoading = useSelector(categoriesIsLoading)

  //  =========================//
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);

  // ==========================//
  return (
    <>
      {isLoading ? <Spinner /> : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Categories />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="mainsignpage" element={<MainSignPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      )
      }
    </>
  );
};

export default App;
