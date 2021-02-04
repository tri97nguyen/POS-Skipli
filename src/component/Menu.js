import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { toggleOrderPanelFromMenu } from '../shared/service'
import Dish from './Dish'
import { DishesContext } from '../providers/Dishes'

export default function Menu() {
    var dishes = useContext(DishesContext);
    var dishesArray = Object.values(dishes);
    // dishesArray = [...dishesArray, ...dishesArray, ...dishesArray]
    console.log(dishesArray);
    dishesArray = dishesArray.map(dish => <Dish {...dish} />)

    return (
        <section id="menu" onClick={toggleOrderPanelFromMenu} className="menu grid-column-row">
            <Header />
            <div className="img-container">
                {dishesArray}
            </div>
            <Footer />

        </section>
    )
}

