import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const user = {name: 'ni7'}
    
    //create user with email password
    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //update info
    // const updateUserInfo = ()


    //signIn a user
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user,
        registerUser,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;