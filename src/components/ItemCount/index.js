import React from "react";

const ItemCount = (props) => {
  const { stock, numberCounter, setterCounter } = props;

  const addOne = () => {
    if (numberCounter < stock) {
      setterCounter(numberCounter + 1);
    }
  };

  const disOne = () => {
    if (numberCounter > 0) {
      setterCounter(numberCounter - 1);
    }
  };

  return (
    <div className="counterContainer">
      <div className="countContainer">
        <button onClick={disOne}>-</button>
        <p>{numberCounter}</p>
        <button onClick={addOne}>+</button>
      </div>
      <small>({stock} available)</small>
    </div>
  );
};

export default ItemCount;
