import React from "react";

export default function SelectedDish() {
  return (
    <div className="selected-dish">
      <img src="" alt="" className="selected-dish-image" />
      <div className="selected-dish-info">selected dish info</div>
      <div className="selected-dish-quantity">
        <p>Qt.</p>
        <p>1</p>
      </div>
      <button className="btn block selected-dish-btn">+</button>
      <button className="btn block selected-dish-btn">-</button>
    </div>
  );
}
