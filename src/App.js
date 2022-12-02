// import "./components/category-item/category-item.scss"
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-component.jsx";



const Shop = () => {
  return <div>i am shop page </div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
