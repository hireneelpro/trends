import { ProductsContext } from "../../../context/products.context";
import { useContext } from "react";
import ProductCard from "../../product-card/product-card";
import "./shop.scss"
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((each) => (
        <ProductCard key={each.id} product={each} />
      ))}
    </div>
  );
};

export default Shop;
