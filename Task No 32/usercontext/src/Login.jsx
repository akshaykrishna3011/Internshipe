    import React, { useContext } from "react";
    import { userContext } from "./userContext";

    const Login = () => {
    const { setUser } = useContext(userContext);

    const handleLogin = () => {
        setUser({
        name: "Akshay",
        email: "akku@gmail.com",
        loggedIn: true,
        });
    };

    return <button onClick={handleLogin}>Login</button>;
    };

    export default Login;