import React from "react";
import { useContext } from "react";
import { ContextCart } from "context/cartContext";
import ButtonPrimary from "components/Buttons/ButtonPrimary";
import ButtonSecondary from "components/Buttons/ButtonSecondary";
import ItemCart from "./ItemCart";
import ButtonDisabledPrimary from "components/Buttons/ButtonDisabledPrimary";
import ButtonDisabledSecondary from "components/Buttons/ButtonDisabledSecondary";
import { useProductCart } from "hooks/useProductCart";

const CartMenu = (props) => {
  const { setterClosed } = props;
  const { cart, setCart } = useContext(ContextCart);
  const { totalPrice } = useProductCart();
  const renderItems = cart.map((producto) => (
    <ItemCart dataProducto={producto}></ItemCart>
  ));

  return (
    <div className="cartMenu-container">
      <div className="cartMenu">
        <button className="closeCart" onClick={() => setterClosed(true)}>
          <i className="fa-solid fa-xmark close-cart"></i>Cerrar
        </button>
        <div className="cart-container">
          <h2>Shopping Cart</h2>

          <div className="cart-products-container">
            {!cart.length ? (
              <p className="cartEmpty">The cart is empty </p>
            ) : (
              renderItems
            )}
          </div>
          <div className="total-product-container">
            <p>
              <b>Total: </b>$
              <span className="total">{!cart.length ? 0 : totalPrice}</span>
            </p>
            {!cart.length ? (
              <ButtonDisabledPrimary
                textButton="buy"
                icon="fa-solid fa-cart-shopping"
              />
            ) : (
              <ButtonPrimary
                textButton="buy"
                icon="fa-solid fa-cart-shopping"
                pathLink="/payment"
                onClick={() => setterClosed(true)}
              />
            )}
            {!cart.length ? (
              <ButtonDisabledSecondary
                textButton="empty cart"
                icon="fa-regular fa-trash-can"
              />
            ) : (
              <ButtonSecondary
                textButton="empty cart"
                icon="fa-regular fa-trash-can"
                onClick={() => setCart([])}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
