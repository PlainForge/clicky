import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { auth } from "./firebase";

export const authService = {
    async signInWithGoogle(googleProvider : GoogleAuthProvider) {
        await signInWithPopup(auth, googleProvider);
    },

    async logout() {
        await signOut(auth);
    },

    onAuthStateChanged(callback: (user: User | null) => void) {
        return onAuthStateChanged(auth, callback);
    }
};
