// import "./components/category-item/category-item.scss"
import { Routes, Route } from "react-router-dom";
import MainSignPage from "./components/authentication/mainsignpage/main-sign-page";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation.component";



const Shop = () => {
  return <div>i am shop page </div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="mainsignpage" element={<MainSignPage />} />
      </Route>
    </Routes>
  );
};

export default App;
