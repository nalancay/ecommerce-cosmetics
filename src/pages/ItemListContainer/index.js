import React, { useState } from "react";
import CategoryNav from "components/CategoryNav";
import ItemList from "components/ItemList";

const ItemListContainer = () => {
  const [category, setCategory] = useState("all");

  return (
    <section className="storeContainer">
      <h2>Store</h2>
      <CategoryNav
        categorySelected={category}
        setterCategorySelected={setCategory}
      />
      <ItemList categorySelected={category} />
    </section>
  );
};

export default ItemListContainer;
