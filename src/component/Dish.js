import React from 'react'

export default function Dish({ name, photoURL }) {

    console.log(photoURL)

    return (
        <div style={{ backgroundImage: `url(${photoURL})` }} className="dish">
            <div className="quantity">1</div>
        </div>
    )
}
