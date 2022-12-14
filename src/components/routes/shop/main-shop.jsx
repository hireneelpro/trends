// import { CategoriesContext } from "../../../context/categories-context";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../product-card/product-card";
import "./main-shop.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/categories.selector";

const MainShop = () => {
  const categories = useSelector(selectCategories);
  // console.log(categories);

  return (
    <Fragment>
      {categories &&
        Object.keys(categories).map((title) => (
          <Fragment key={title}>
            <h2>
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
        ))}
    </Fragment>
  );
};

export default MainShop;
