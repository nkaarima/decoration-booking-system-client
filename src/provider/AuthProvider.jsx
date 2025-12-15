import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../context/AuthContext';

const AuthProvider = ({children}) => {

     const signUp= (email,password) => {

         return createUserWithEmailAndPassword(auth,email,password);
     }
   
     const authInfo ={

        signUp,
     }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;