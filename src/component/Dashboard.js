import React from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './Menu'
import OrderHistoryPanel from './OrderHistoryPanel';

export default function Dashboard() {
    return (
        <div className="content grid-column">
            <Menu />
            <OrderHistoryPanel />
        </div>
    )
}
