import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { toggleOrderPanelFromMenu } from "../shared/service";
import Dish from "./Dish";
import { DishesContext } from "../providers/Dishes";

export default function Menu() {
  var { dishes, dishesDispatch } = useContext(DishesContext);
  const dishesArray = dishes.map((dish, index) => (
    <Dish key={index} index={index} {...dish} dishesDispatch={dishesDispatch} />
  ));

  console.log("dishes in Menu is ", dishes);
  return (
    <section
      id="menu"
      onClick={toggleOrderPanelFromMenu}
      className="menu grid-column-row"
    >
      <Header />
      <div className="img-container">{dishesArray}</div>
      <Footer />
    </section>
  );
}
