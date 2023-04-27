import React, { useEffect, useState } from "react";
import ItemCount from "components/ItemCount";
import ButtonPrimary from "components/Buttons/ButtonPrimary";
import ButtonSecondary from "components/Buttons/ButtonSecondary";
import { useProductCart } from "hooks/useProductCart";

const Item = ({ product }) => {
  const { id, name, image_link, brand, price, stock } = product;
  const [count, setCount] = useState(0);
  const { addToCart, isItemExisting } = useProductCart();

  useEffect(() => {
    const isItemInCarrito = isItemExisting(id);
    if (isItemInCarrito) setCount(isItemInCarrito.quantity);
  }, []);

  return (
    <div className="itemCardContainer">
      <img src={image_link || "assets/noimage.png"} alt="" />
      <div className="titleContainer">
        <h3>{name}</h3>
        <p>by {brand || "NV mkp"}</p>
      </div>
      <div className="itemManageContainer">
        <p>Price: ${price}</p>
        <ItemCount
          stock={stock}
          numberCounter={count}
          setterCounter={setCount}
        />
      </div>
      <ButtonPrimary
        textButton="add to cart"
        onClick={() => addToCart(product, count)}
      />
      <ButtonSecondary
        textButton="view details"
        pathLink={`/store/product/${id}`}
      />
    </div>
  );
};

export default Item;
