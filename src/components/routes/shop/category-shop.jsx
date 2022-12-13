import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/categories.selector";
// import { useContext } from "react";
// import { CategoriesContext } from "../../../context/categories-context";
import ProductCard from "../../product-card/product-card";
const CatetoryShop = () => {
  // const { categories } = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);
  console.log(categories);

  const { category } = useParams();
  console.log(category);

  return (
    <div className="products-container">
      {categories[category] ? (
        categories[category].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1> No items to show</h1>
      )}
    </div>
  );
};

export default CatetoryShop;
