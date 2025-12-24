import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../context/AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

     const [user,setUser]= useState(null);
     const [loading,setLoading] = useState(true);
     

     const signUp= (email,password) => {

        setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password);
     }

     const login = (email,password) => {
         
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }

     const logOut = () => {

         setLoading(true);
         return signOut(auth);
     }

     const updateUser = (name,image) => {

        return updateProfile(auth.currentUser, {

          displayName:name,
          photoURL:image
             
       })
     }

     const googleLogin = () => {

        setLoading(true);
        return signInWithPopup(auth,googleProvider);
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
        logOut,
        updateUser,
        googleLogin,

     }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;