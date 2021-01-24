import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Menu() {
    var photos = []
    for (var i = 0; i < 100; i++) {
        photos.push(<div className="image" key={i} alt="some thing" >dish image</div>)
    }
    return (
        <section className="menu">
            <Header />
            <div className="img-container">
                {photos}
            </div>
            <Footer />

        </section>
    )
}
