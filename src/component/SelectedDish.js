import React from "react";
import { ADD_DISH, REMOVE_DISH } from "../providers/Dishes";

export default function SelectedDish({
  name,
  photoURL,
  quantity,
  dishesDispatch,
  index
}) {
  console.log(`dish name ${name} quantity ${quantity}`);

  return (
    <div className="selected-dish">
      <img src={photoURL} alt="" className="selected-dish-image" />
      <div className="selected-dish-info">{name}</div>
      <div className="selected-dish-quantity">
        <p>Qt.</p>
        <p>{quantity}</p>
      </div>
      <button
        onClick={() => dishesDispatch({ type: ADD_DISH, payload: { index } })}
        className="btn block selected-dish-btn"
      >
        +
      </button>
      <button
        onClick={() =>
          dishesDispatch({ type: REMOVE_DISH, payload: { index } })
        }
        className="btn block selected-dish-btn"
      >
        -
      </button>
    </div>
  );
}
