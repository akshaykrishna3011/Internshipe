import React, { useContext } from "react";
import { userContext } from "./userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      {user ? <h2>Welcome {user.name}</h2> : <h2>Please login</h2>}
    </div>
  );
};

export default Profile;