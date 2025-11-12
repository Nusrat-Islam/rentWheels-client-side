import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    



const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

    //Create User
 const createUser = (email,password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
 }   
    //Login User
 const logIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }   
//googleLogin
const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
 useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        // console.log(currentUser)
        setLoading(false)
    })
    return () => {
        unSubscribe();
    }
 },[]);

 //SignOut
 const logOut = () => {
  setLoading(false)
    return signOut(auth)
      
 }

const authInfo ={
logOut,
createUser,
logIn,
googleLogin,
user,
loading,
    

}

   return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;