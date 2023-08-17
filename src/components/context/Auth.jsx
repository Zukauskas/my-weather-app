/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Global } from "./Global";
import Login from "../login/Login.jsx";

function Auth({ children }) {
    const { user } = useContext(Global);

    if (user) {
        return <>{children}</>;
    }
    if (user === undefined) {
        return <Login />;
    }
}

export default Auth;
