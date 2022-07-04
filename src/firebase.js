// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { toast } from "react-hot-toast";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZeis96AsH8HSmJZbQqKKYY8vl_Ki3Qs",
  authDomain: "app-deneme-dc89e.firebaseapp.com",
  projectId: "app-deneme-dc89e",
  storageBucket: "app-deneme-dc89e.appspot.com",
  messagingSenderId: "2912612330",
  appId: "1:2912612330:web:ae0bce9d01d32871144c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const register = async(email,password)=>{
  try {
    const {user} = await createUserWithEmailAndPassword(auth,email,password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const signin = async(email,password)=>{
  try {
    const {user} = await signInWithEmailAndPassword(auth,email,password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const logout = async()=>{
  try {
    await signOut(auth)
  } catch (error) {
    toast.error(error.message)
  }
}