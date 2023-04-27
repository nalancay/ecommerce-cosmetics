import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "components/ItemDetail";
import ButtonText from "components/Buttons/ButtonText";
import ItemError from "components/ItemError";
import ItemDetailLoader from "components/ItemDetailLoader";
import { data } from "Data";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [filterProduct, setFilterProduct] = useState();

  const [isLoadingProducts, setProductLoader] = useState(true);

  const getDataDetailProduct = () => {
    try {
      setProductLoader(false);
      const findProduct = data.find(
        (product) => product.id === Number(productId)
      );

      if (findProduct) setFilterProduct(findProduct);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataDetailProduct();
  }, [productId]);

  return (
    <section className="itemDetailContainer">
      <ButtonText
        textButton="go back to the store"
        pathLink="/store"
        icon="fa-solid fa-arrow-left"
      ></ButtonText>
      {isLoadingProducts && <ItemDetailLoader />}

      {filterProduct ? (
        <ItemDetail key={productId} product={filterProduct} />
      ) : (
        <ItemError />
      )}
    </section>
  );
};

export default ItemDetailContainer;
