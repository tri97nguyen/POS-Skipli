import React, { useEffect, useReducer, createContext } from "react";
import { database } from "../firebase";

export const ADD_DISH = "ADD_DISH";
export const REMOVE_DISH = "REMOVE_DISH";
const FETCH_DATA = "FETCH_DATA";
export var DishesContext = createContext(null);

var pleaseDeleteMe;

export default function Dishes({ children }) {
  const [dishes, dishesDispatch] = useReducer(reducer, []);
  const passdown = { dishes, dishesDispatch };
  useEffect(() => {
    const dishesRef = database.ref("dishes");

    dishesRef.on("value", function updateDishes(snapshot) {
      const dishes = Object.values(snapshot.val());
      console.log("dishes from Dish is ", dishes);
      dishesDispatch({
        type: FETCH_DATA,
        payload: { dishes }
      });
    });

    return () => {
      dishesRef.off();
    };
  }, []);

  return (
    <DishesContext.Provider value={passdown}>{children}</DishesContext.Provider>
  );
}

function reducer(state, action) {
  if (action.type === ADD_DISH) {
    const newState = state.map((dish, index) => {
      if (index == action.payload.index) {
        console.log(
          `ADD_DISH dispatch, ${dish.name} quantity ${dish.quantity}`
        );
        return { ...dish, quantity: dish.quantity + 1 };
      } else return dish;
    });
    return newState;
  } else if (action.type === REMOVE_DISH) {
    const newState = state.map((dish, index) => {
      if (index == action.payload.index && dish.quantity > 0) {
        console.log(
          `REMOVE_DISH dispatch, ${dish.name} quantity ${dish.quantity}`
        );
        return { ...dish, quantity: dish.quantity - 1 };
      } else return dish;
    });
    return newState;
  } else if (action.type === FETCH_DATA) {
    const dishesWithQuantity = action.payload.dishes.map((dish) => ({
      ...dish,
      quantity: 0
    }));
    return dishesWithQuantity;
  } else return state;
}
