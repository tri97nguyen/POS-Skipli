import React, { useContext } from "react";
import SelectedDish from "./SelectedDish";
import { DishesContext } from "../providers/Dishes";

export default function OrderHistoryPanel() {
  let { dishes, dishesDispatch } = useContext(DishesContext);

  dishes = dishes.map((dish, index) => {
    if (dish.quantity > 0)
      return (
        <SelectedDish
          key={index}
          index={index}
          {...dish}
          dishesDispatch={dishesDispatch}
        />
      );
  });

  return (
    <div
      id="order-history-panel"
      className="order-history-panel grid-column-row"
    >
      <div className="table-number">table number</div>
      <div className="metadata">order metadata</div>
      <div className="order-container">{dishes}</div>
      <div className="summary">total summary</div>
    </div>
  );
}
