import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import "./navbar.css"
import { useSelector } from 'react-redux';
function Navbar() {
  let value=useSelector(state=>state.singleProductSlice.value);
  let number=0
  value.forEach((item)=>{
    number+=item.number;
  })
  return (
    <div className='navContainer'>
        <h1>MY STORE</h1>
        <div className="icon">
        <i><FaCartPlus className='cartIcon' /></i>
        <p className='cartNumber'>{number}</p>
        </div>     
    </div>
  )
}

export default Navbar