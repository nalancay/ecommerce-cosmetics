import React from "react";
import ButtonFilter from "components/Buttons/ButtonFilter";

const categories = [
  "all",
  "mascara",
  "lipstick",
  "foundation",
  "blush",
  "eyeliner",
];

const CategoryNav = (props) => {
  const { categorySelected, setterCategorySelected } = props;

  return (
    <nav className="categoryNavContainer">
      <p>Categories</p>
      <ul className="categoryNavContainerList">
        {categories.map((category) => (
          <ButtonFilter
            key={category}
            nameCategory={category}
            setterCategorySelected={setterCategorySelected}
            categorySelected={categorySelected}
          />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
