import React, { useState } from 'react';
import { app } from '../base'
import googleProvider from '../base'

const initialState = {
    email: '',
    password: ''
}

export const Login = (props) => {
    const [state, setState] = useState(initialState);

    const setEmail = (e) => {
        setState({ ...state, email: e.target.value })
    }

    const setPassword = (e) => {
        setState({ ...state, password: e.target.value })
    }
    
    const logIn = () => {
        app.auth().createUserWithEmailAndPassword(state.email, state.password)
            .catch(function (err) {
                throw err
                // Handle errors
            });
    }

    const signUp = () => {
        app.auth().signInWithEmailAndPassword(state.email, state.password)
            .then(res => {
                console.log(res.user)
                props.setUser(res.user);
            })
        .catch(function (err) {
            throw err
        });
    }

    const googleLogIn = () => {
        const google = app.auth().signInWithPopup(googleProvider);
        google.then((res) => console.log(res))
        
    }

    const signOut = () => {
        app.auth().signOut()
            .catch(function (err) {
            })
    };
    return (
        <div>
            <h1>Hello Vasia!</h1>
            <input type="text" onChange={setEmail} />
            <input type="password" onChange={setPassword} />
            <button onClick={logIn}>Sign up</button>
            <button onClick={signUp}>Log in</button>
            <button onClick={signOut}>Log out</button>
            <button onClick={googleLogIn}>GOOGLE</button>
        </div>
    )
}