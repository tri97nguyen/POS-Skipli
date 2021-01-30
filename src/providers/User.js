import React, { useEffect, createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'

export var UserContext = createContext(null);


export default function User({ children }) {
    var history = useHistory();
    var [user, setUser] = useState({ displayName: "", photoURL: "" });

    useEffect(() => {
        // get user info on redirect after login successfully
        // getLoginRedirectResult().then(fetchedUser => {
        //     if (typeof fetchedUser !== "undefined") {
        //         console.log("fetchedUser is ", fetchedUser);
        //         setUser(prevUser => ({ ...prevUser, displayName: fetchedUser.displayName, photoURL: fetchedUser.photoURL }));
        //         history.push('/dashboard');
        //     }
        // });

        var unsubscribe = firebase.auth().onAuthStateChanged(function (fetchedUser) {
            if (fetchedUser) {
                setUser({ displayName: fetchedUser.displayName, photoURL: fetchedUser.photoURL });
                history.push('/dashboard');
            }
            else setUser({ displayName: "", photoURL: "" });
        })

        return () => {
            unsubscribe();
        }


    }, [])

    console.log(user.displayName);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}


async function getLoginRedirectResult() {
    try {
        var result = await firebase.auth().getRedirectResult();
        if (result.credential) {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            var user = result.user;
            console.log("redirect user is ", user);
            return user;
        }
    } catch (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.error(errorCode);
        console.error(errorMessage);
        console.error(email);
        console.error(credential);
    }


}

