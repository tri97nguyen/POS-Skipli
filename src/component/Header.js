import React, { useContext } from 'react'
import { toggleOrderPanel } from '../shared/service'
import { UserContext } from '../providers/User'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'



export default function Header() {
    var history = useHistory();
    var user = useContext(UserContext);

    async function signOut() {
        var result = await auth.signOut();
        console.log("signout successful ", result);
        history.push('/login');
    }

    return (
        <div className="header flex">
            <p>Welcome {user.displayName}. Not you?</p>
            <button className="block btn" onClick={signOut}>Logout</button>
            <button id="order-panel-btn" className="btn" onClick={toggleOrderPanel}>{'>>'}</button>
        </div>
    )
}

