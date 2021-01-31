import React, { useContext } from 'react'
import Menu from './Menu'
import OrderHistoryPanel from './OrderHistoryPanel';
import { UserContext } from '../providers/User'
import { useHistory } from 'react-router-dom'

export default function Dashboard() {
    var user = useContext(UserContext);
    console.log(user.displayName);
    var history = useHistory();

    if (user.displayName == "") history.push('/login'); // if not log in, redirect to login page
    return (
        <div className="content grid-column">
            <Menu />
            <OrderHistoryPanel />
        </div>
    )
}
