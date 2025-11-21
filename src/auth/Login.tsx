import { GoogleAuthProvider } from "firebase/auth";
import { authService } from "../lib/firebaseService";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import Loading from "../components/Loading";

export default function Login() {    
    const context = useContext(MainContext);

    if (!context) return null;
    const { loading, setLoading } = context;

    const handeGoogleSignIn = async () => {
        try {
            setLoading(true);
            const provider = new GoogleAuthProvider();
            authService.signInWithGoogle(provider);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loading />

    return (
        <div className="login-card">
            <h1 className="title-main">Welcome to Clicky</h1>
            <p className="title-sub">by PlainForge</p>
            <button 
                className="button-md"
                onClick={handeGoogleSignIn}
            >
                Login with Google
            </button>
        </div>
    );
}