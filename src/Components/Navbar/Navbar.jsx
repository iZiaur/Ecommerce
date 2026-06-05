import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Navbar(){


    let[menu,setmenu]=useState("Shop");
    const {getTotalCartItems}=useContext(ShopContext);
    return (
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Threadly</p>
        </div>
        
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("Shop")}}><Link to="/" style={{textDecoration:'none',color:'inherit'}}>Shop</Link> {menu==="Shop"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Men")}}> <Link to="/mens"  style={{textDecoration:'none',color:'inherit'}}>Men</Link>{menu==="Men"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Women")}}><Link to="/womens"  style={{textDecoration:'none',color:'inherit'}}>Women</Link>{menu==="Women"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link to="/kids"  style={{textDecoration:'none',color:'inherit'}}>Kids</Link>{menu==="Kids"?<hr/>:null}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=" "></img></Link>
            <div className="nav-card-count">{getTotalCartItems()}</div>
        </div>
</div>
        )



}
export default Navbar;