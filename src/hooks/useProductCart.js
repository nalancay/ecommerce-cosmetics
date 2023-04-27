import { ContextCart } from "context/cartContext";
import { useContext, useMemo } from "react";

const getTotalPriceProducts = (productsCart) => {
  return productsCart.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);
};

export const useProductCart = () => {
  const { cart, setCart } = useContext(ContextCart);

  const isItemExisting = (id) => {
    return cart.find((item) => item.id === id);
  };

  function addToCart(product, count) {
    const itemExisting = isItemExisting(product.id);

    const itemCart = {
      ...product,
      id: product.id,
      quantity: count,
    };

    if (!itemExisting && count > 0) {
      setCart([...cart, itemCart]);
      return;
    } else if (!itemExisting && count === 0) {
      return;
    } else {
      itemExisting.quantity = count;

      const carritoFilter = cart.filter((item) => item.id !== product.id);

      if (itemExisting.quantity > 0) {
        carritoFilter.push(itemExisting);
      }

      setCart(carritoFilter);
    }
  }

  const removeProduct = (id) => {
    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
  };
  const totalPrice = useMemo(() => getTotalPriceProducts(cart), [cart]);

  return {
    removeProduct,
    totalPrice: totalPrice.toFixed(2),
    addToCart,
    isItemExisting,
  };
};
