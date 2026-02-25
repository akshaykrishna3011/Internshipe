import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import UserProvider from "./userProvider";
import './App.css'
const App = () => {
  return (
    <UserProvider>
      <Profile />
      <Login />
    </UserProvider>
  );
};

export default App;