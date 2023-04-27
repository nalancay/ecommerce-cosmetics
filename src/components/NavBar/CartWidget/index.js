import React from "react";
import { useContext } from "react";
import { ContextCart } from "context/cartContext";

const CartWidget = (props) => {
  const { setterClosed } = props;
  const { cart } = useContext(ContextCart);

  const addUpQuantities = () => {
    const extractQuantitys = cart.map((item) => item.quantity);

    const addUp = extractQuantitys.reduce(function (a, b) {
      return a + b;
    });
    return addUp;
  };

  return (
    <div className="Cart" onClick={() => setterClosed(false)}>
      <div className="IconCart">
        <i className="fa-solid fa-cart-shopping"></i>
        {cart.length > 0 && <span>{addUpQuantities()}</span>}
      </div>
      Cart
    </div>
  );
};

export default CartWidget;
