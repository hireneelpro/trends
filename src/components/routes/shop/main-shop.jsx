// import { CategoriesContext } from "../../../context/categories-context";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../product-card/product-card";
import "./main-shop.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/categories.selector";
import Spinner from "../../spinner/spinner";
import { categoriesIsLoading } from "../../../store/categories/categories.selector";

const MainShop = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(categoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        categories &&
        Object.keys(categories).map((title) => (
          <Fragment key={title}>
            <h2 className="category-title">
              <Link to={title}>
                <span>{title}</span>
              </Link>
            </h2>
            <div className="products-container">
              {categories[title].slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        ))
      )}
    </Fragment>
  );
};

export default MainShop;
