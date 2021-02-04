import React from "react";
import { ADD_DISH, REMOVE_DISH } from "../providers/Dishes";

export default function Dish({
  name,
  photoURL,
  quantity,
  dishesDispatch,
  index
}) {
  return (
    <div style={{ backgroundImage: `url(${photoURL})` }} className="dish">
      <div className="quantity">{quantity}</div>
      <button
        onClick={() => dishesDispatch({ type: ADD_DISH, payload: { index } })}
        className="btn block dish-btn"
      >
        +
      </button>
      <button
        onClick={() =>
          dishesDispatch({ type: REMOVE_DISH, payload: { index } })
        }
        className="btn block dish-btn"
      >
        -
      </button>
    </div>
  );
}
