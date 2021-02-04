import React from "react";
import SelectedDish from "./SelectedDish";

export default function OrderHistoryPanel() {
  var orders = [];
  for (var i = 0; i < 3; i++) {
    orders.push(<SelectedDish key={i} />);
  }
  return (
    <div
      id="order-history-panel"
      className="order-history-panel grid-column-row"
    >
      <div className="table-number">table number</div>
      <div className="metadata">order metadata</div>
      <div className="order-container">{orders}</div>
      <div className="summary">total summary</div>
    </div>
  );
}
