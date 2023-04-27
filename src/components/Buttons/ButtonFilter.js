import React from "react";

const ButtonFilter = (props) => {
  const { nameCategory, setterCategorySelected, categorySelected } = props;

  return (
    <li
      onClick={() => setterCategorySelected(`${nameCategory}`)}
      className={categorySelected === `${nameCategory}` ? "filterSelected" : ""}
    >
      {nameCategory}
    </li>
  );
};

export default ButtonFilter;
