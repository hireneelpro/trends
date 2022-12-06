import "./cart-item.scss"


const CartItem = ({item}) => {
       const{name,price,quantity,imageUrl}= item
    return (
      <div className="item">
        <img src={imageUrl} alt={name} />
        <div className="item-info">
          <h6 className="item-name">{name}</h6>
          <span className="item-price">
            price ${price} X <span className="item-quantity">{quantity}</span>
          </span>
        </div>
      </div>
    );
}

export default CartItem