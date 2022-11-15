import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "./firebase";

export const singInFirebase = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

export const singUpFirebase = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password)

