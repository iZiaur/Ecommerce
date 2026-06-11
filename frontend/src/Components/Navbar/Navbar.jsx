import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../Assets/nav_dropdown.png"
import { useRef } from "react";

function Navbar(){


    let[menu,setmenu]=useState("Shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuref=useRef();

    const dropdown_toggle=(e)=>{
        menuref.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }

    return (
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Threadly</p>
        </div>
        <img className="nav-dropdown"onClick={dropdown_toggle} src={dropdown} alt="" />
        <ul ref={menuref} className="nav-menu">
            <li onClick={()=>{setmenu("Shop")}}><Link to="/" style={{textDecoration:'none',color:'inherit'}}>Shop</Link> {menu==="Shop"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Men")}}> <Link to="/mens"  style={{textDecoration:'none',color:'inherit'}}>Men</Link>{menu==="Men"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Women")}}><Link to="/womens"  style={{textDecoration:'none',color:'inherit'}}>Women</Link>{menu==="Women"?<hr/>:null}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link to="/kids"  style={{textDecoration:'none',color:'inherit'}}>Kids</Link>{menu==="Kids"?<hr/>:null}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');
                window.location.replace("/");
            }}>Logout</button>:<Link to="/login"><button>Login</button></Link>}
            
            <Link to="/cart"><img src={cart_icon} alt=" "></img></Link>
            <div className="nav-card-count">{getTotalCartItems()}</div>
        </div>
</div>
        )



}
export default Navbar;