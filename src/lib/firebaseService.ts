import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { auth } from "./firebase";

export const authService = {
    async signInWithGoogle(googleProvider : GoogleAuthProvider) {
        await signInWithPopup(auth, googleProvider);
    },

    onAuthStateChanged(callback: (user: User | null) => void) {
        return onAuthStateChanged(auth, callback);
    }
};
