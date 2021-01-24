import React from 'react'

export default function Menu() {
    var photos = []
    for (var i = 0; i < 10; i++) {
        photos.push(<><img src="./image.jpg" /></>)
    }
    return (
        <div>
            {photos}
        </div>
    )
}
