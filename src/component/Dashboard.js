import React, { useContext } from 'react'
import Menu from './Menu'
import OrderHistoryPanel from './OrderHistoryPanel';
import { UserContext } from '../providers/User'

export default function Dashboard() {
    var user = useContext(UserContext);
    console.log(user.displayName);
    return (
        <div className="content grid-column">
            <Menu />
            <OrderHistoryPanel />
        </div>
    )
}
