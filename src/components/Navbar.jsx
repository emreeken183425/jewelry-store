import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="row  " >
<div className="col-md-4">
<h1 onClick={()=>navigate("/")} >ATİLLA JEWELRY</h1>
</div>
<div className="col-8">
<ul className="list" >
    <li onClick={()=>navigate("/about")} >ABOUT US</li>
    <li onClick={()=>navigate("/contact")} >CONTACT</li>
    <li  onClick={()=>navigate("/favorite")} >FAVORİTE ❤</li>
    <li  onClick={()=>navigate("/shopping")} >SHOPPİNG CART🛒 </li>
</ul>
</div>
    </div>
  );
};

export default Navbar;
