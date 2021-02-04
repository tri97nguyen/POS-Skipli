import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { toggleOrderPanelFromMenu } from '../shared/service'
import Dish from './Dish'
import { DishesContext } from '../providers/Dishes'

export default function Menu() {
    var dishes = useContext(DishesContext);
    var photos = []
    for (var i = 0; i < 100; i++) {
        photos.push(<Dish />)
    }
    return (
        <section id="menu" onClick={toggleOrderPanelFromMenu} className="menu grid-column-row">
            <Header />
            <div className="img-container">
                {photos}
            </div>
            <Footer />

        </section>
    )
}

