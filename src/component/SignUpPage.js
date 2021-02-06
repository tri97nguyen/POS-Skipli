import React from 'react';
import { NavLink } from 'react-router-dom';
export default function SignUpPage(){
    
    return(
        <div>
        <h1>Hello Signup</h1>
        <NavLink to ='/login' > Go back to Login page </NavLink>
        </div>
    )

}