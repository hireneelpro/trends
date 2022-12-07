import "./checkout-item.scss"

const CheckOutItem = ({ item }) => {
  const { name, price, id, quantity, imageUrl } = item;
  console.log(item);

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <h5>{name}</h5>
      <div className="dec-no-inc">
        <i className="fas fa-chevron-left decrease"></i>
        <span className="quantity">{quantity}</span>
        <i className="fas fa-chevron-right increase"></i>
      </div>
      <span>{price}</span>
      <span>
        <i class="fas fa-times remove"></i>
      </span>
    </div>
  );
};

export default CheckOutItem;
