import { ProductsContext } from "../../../context/products.context";
import { useContext } from "react";
import ProductCart from "../../product-cart/product-cart";
import "./shop.scss"
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((each) => (
        <ProductCart key={each.id} product={each} />
      ))}
    </div>
  );
};

export default Shop;
