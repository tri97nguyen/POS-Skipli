import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { toggleOrderPanelFromMenu } from '../shared/service'
export default function Menu() {
    var photos = []
    for (var i = 0; i < 100; i++) {
        photos.push(<div className="image" key={i} alt="some thing" >dish image</div>)
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

