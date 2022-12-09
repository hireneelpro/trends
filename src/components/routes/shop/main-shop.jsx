import { CategoriesContext } from "../../../context/categories-context";
import { Fragment, useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import ProductCard from "../../product-card/product-card";
import "./main-shop.scss";

const MainShop = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  // console.log(Object.keys(categories));
  

  return (
    <Fragment>
      {Object.keys(categories).map((title) => (
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
