import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useState } from "react";

function Navbar(){


    let[menu,setmenu]=useState("Shop");
    return (
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Threadly</p>
        </div>
        
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("Shop")}}>Shop {menu=="Shop"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Men")}}> Men{menu=="Men"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Women")}}>Women{menu=="Women"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Kids")}}>Kids{menu=="Kids"?<hr/>:null}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon}></img>
            <div className="nav-card-count">0</div>
        </div>
</div>
        )



}
export default Navbar;