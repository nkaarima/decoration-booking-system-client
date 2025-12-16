import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../context/AuthContext';

const AuthProvider = ({children}) => {

     const [user,setUser]= useState(null);
     const [loading,setLoading] = useState(false);


     const signUp= (email,password) => {

        setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password);
     }

     const login = (email,password) => {

         return signInWithEmailAndPassword(auth,email,password);
     }
    
    
     useEffect(() => {
 
        const unsubscribe= onAuthStateChanged(auth,(currentUser) => {
       
             setUser(currentUser)
             setLoading(false);

        })
       
         return () => {
             unsubscribe();
         }


     }, [])
   
     const authInfo ={

        signUp,
        user,
        loading,
        login,

     }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;