import { Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/categories-context";
import ProductCard from "../../product-card/product-card";
const CatetoryShop = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();

  return (
    <div className="products-container">
      {categories[category].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CatetoryShop;
