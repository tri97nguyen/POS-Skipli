import React from 'react'

export default function OrderHistoryPanel() {
    var orders = []
    for (var i = 0; i < 100; i++) {
        orders.push(<div className="order" key={i} alt="some order" >dish info</div>)
    }
    return (
        <div id="order-history-panel" className="order-history-panel">
            <div className="table-number" >table number</div>
            <div className="metadata">order metadata</div>
            <div className="order-container">
                {orders}
            </div>
            <div className="summary">total summary</div>
        </div>
    )
}
