import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <h3>Welcome, {user} 👋</h3>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default Profile;
