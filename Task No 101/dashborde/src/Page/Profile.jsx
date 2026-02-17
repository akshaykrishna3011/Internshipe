import React from "react";

const Profile = React.memo(() => {
  console.log("Profile rendered");
  return <div className="profile"><h2>User Profile</h2></div>;
});

export default Profile;
