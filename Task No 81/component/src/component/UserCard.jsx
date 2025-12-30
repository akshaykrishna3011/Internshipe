import React from 'react'

const UserCard = () => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "200px",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <p>Name : Akshay</p>
      <p>Age : 27</p>
      <img
        src="/myphoto.jpg"
        alt="Profile"
        style={{ width: "120px", borderRadius: "5px" }}
      />

    </div>
  )
}

export default UserCard
