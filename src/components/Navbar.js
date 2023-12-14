import React from 'react'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",justifyContent:"space-evenly"}}>
      <img src={logo} alt="" style={{width:"200px"}}/>
      <div style={{display:"flex"}}>
        <p>
          <Link to="/" style={{marginRight:"30px",fontSize:"20px",textDecoration:"none",color:"black"}}>Home</Link>
        </p>
        <p>
          <Link to="/about" style={{fontSize:"20px",fontSize:"20px",textDecoration:"none",color:"black"}}>About</Link>
        </p>
      </div>
    </div>
  )
}

export default Navbar