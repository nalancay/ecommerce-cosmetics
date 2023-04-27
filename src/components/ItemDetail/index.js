import React, { useState, useEffect, useContext } from "react";
import { ContextCart } from "context/cartContext";
import ItemCount from "components/ItemCount";
import ButtonPrimary from "components/Buttons/ButtonPrimary";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(ContextCart);
  const {
    id,
    name,
    image_link,
    brand,
    price,
    description,
    product_colors,
    stock,
  } = product;

  const productColors = product_colors.map((product) => (
    <div className="productColor">
      <div
        className="productColorCircle"
        style={{ backgroundColor: `${product.hex_value}` }}
      ></div>
      <p className="productColorName">{product.colour_name}</p>
    </div>
  ));

  function isItemExisting(id) {
    return cart.find((item) => item.id === id);
  }

  function addToCart() {
    const itemExisting = isItemExisting(id);
    const itemCart = {
      ...product,
      id,
      quantity: count,
    };

    if (!itemExisting && count > 0) {
      setCart([...cart, itemCart]);
      return;
    } else if (!itemExisting && count === 0) {
      return;
    } else {
      itemExisting.quantity = count;
      const carritoFilter = cart.filter((item) => item.id !== id);

      if (itemExisting.quantity > 0) {
        carritoFilter.push(itemExisting);
      }
      setCart(carritoFilter);
    }
  }
  useEffect(() => {
    const isItemInCarrito = isItemExisting(id);
    if (isItemInCarrito) setCount(isItemInCarrito.quantity);
  }, []);

  return (
    <article className="cardItemProductContainer">
      <div className="frontDataProduct">
        <img src={image_link || "assets/noimage.png"} alt="" />
        <div className="data-row">
          <div className="dataProduct">
            <div className="titleProduct">
              <h3>{name}</h3>
              <p>by {brand || "NV mkp"}</p>
            </div>
            <div className="productsColorContainer">{productColors}</div>
          </div>
          <div className="counterPrice">
            <p className="price">
              Price: <small>${price}</small>
            </p>
            <ItemCount
              stock={stock}
              numberCounter={count}
              setterCounter={setCount}
            />
            <ButtonPrimary
              textButton="add to cart"
              onClick={addToCart}
            ></ButtonPrimary>
          </div>
        </div>
      </div>
      <div className="descriptionContainer">
        <h6>Description</h6>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ItemDetail;
