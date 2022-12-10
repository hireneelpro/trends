import { Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/categories-context";
import ProductCard from "../../product-card/product-card";
const CatetoryShop = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();

  return (
    <div className="products-container">
      {categories[category] ?
        (categories[category].map((product) => (
          <ProductCard key={product.id} product={product} />)
        )): <h1> No items to show</h1>
      }
    </div>
  );
};

export default CatetoryShop;
