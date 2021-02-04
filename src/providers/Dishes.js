import React, { useEffect, useState, createContext } from 'react'
import { database } from '../firebase'

export var DishesContext = createContext(null);

export default function Dishes({ children }) {

    const [dishes, setDishes] = useState([])

    useEffect(() => {
        const dishesRef = database.ref('dishes');

        dishesRef.on('value', function updateDishes(snapshot) {

            console.log("ori snapshot", snapshot.val())
            setDishes(snapshot.val());
        });

        return () => {
            dishesRef.off();
        }

    }, [])

    return (
        <DishesContext.Provider value={dishes}>
            {children}
        </DishesContext.Provider>
    )
}
