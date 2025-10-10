import React from "react";

function Header() {
  return (
    <header style={{margin:"0", backgroundColor: "lightblue", padding: "20px"}}>
      <nav style={{paddingRight:"20px"}}>
        <ul style={{margin:"0",listStyle:"none",display:"flex",justifyContent:"right",gap:"50px",paddingRight:"100px",fontSize:"20px",fontWeight:"bold"}}>
          <li >Home</li>
           <li>Contact</li>
            <li>About</li>
             <li>Help</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 
