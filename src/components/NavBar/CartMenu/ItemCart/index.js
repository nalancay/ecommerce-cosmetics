import React from "react";
import { useProductCart } from "hooks/useProductCart";

const ItemCart = ({ dataProducto, displayMode }) => {
  const { id, image_link, name, price, quantity } = dataProducto;
  const { removeProduct } = useProductCart();

  return (
    <div className="itemCart-container">
      <img src={image_link} alt={name} />
      <div className="itemInfo-container">
        <div className="namePrice">
          <h5>{name}</h5>
          <p>
            <b>Price:</b> ${price}
          </p>
        </div>
        <div className="quantityDelete">
          <p>Quantity: {quantity}</p>
          <p style={{ display: displayMode }}>
            <i
              className="fa-regular fa-trash-can"
              onClick={() => removeProduct(id)}
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
