import React from 'react'
import { toggleOrderPanel } from '../shared/service'



export default function Header() {
    return (
        <div className="header flex">
            Header
            <button id="order-panel-btn" onClick={toggleOrderPanel}>Charge</button>
        </div>
    )
}

