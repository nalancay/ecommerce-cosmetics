import React from "react";
import { useState, useEffect } from "react";
import ItemLoader from "components/ItemLoader";
import { data } from "Data";
import Item from "components/Item";

const ItemList = (props) => {
  const { categorySelected } = props;

  const [productos, setProductos] = useState([]);
  const [isLoadingProducts, setProductLoader] = useState(true);

  const getData = async () => {
    try {
      const filterProduct = data.filter(
        (product) => product.category === categorySelected
      );

      const arrayProducts = categorySelected === "all" ? data : filterProduct;
      setProductLoader(false);
      setProductos(arrayProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [categorySelected]);

  return (
    <div className="itemsCardContainer">
      {isLoadingProducts ? (
        <ItemLoader />
      ) : (
        productos.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ItemList;
