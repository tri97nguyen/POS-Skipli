import React, { useContext, useReducer } from "react";
import Menu from "./Menu";
import OrderHistoryPanel from "./OrderHistoryPanel";
import { UserContext } from "../providers/User";
import { useHistory } from "react-router-dom";
import { DishesContext } from "../providers/Dishes";

export default function Dashboard() {
  var user = useContext(UserContext);
  var history = useHistory();
  var dishesContext = useContext(DishesContext);

  if (user.displayName == "") history.push('/login'); // if not log in, redirect to login page
  return (
    <div className="content grid-column">
      <Menu />
      <OrderHistoryPanel />
    </div>
  );
}
