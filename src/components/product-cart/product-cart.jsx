import "./product-cart.scss"

const ProductCart = ({ product }) => {
    const { name, price, imageUrl }= product
    

  return (  
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
          </div>
          <button className="btn">Add to Cart </button>
    </div>
  );
};

export default ProductCart;
