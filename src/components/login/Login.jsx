import { useContext } from "react";
import { Global } from "../context/Global.jsx";
import "./Login.css";

export default function Login() {
    const { login } = useContext(Global);

    return (
        <div className="login-container">
            <p className="login-message">
                You are not signed in. Please sign in with Google to access the
                weather app.
            </p>
            <button className="login-button" onClick={() => login()}>
                Sign in with Google
            </button>
        </div>
    );
}
