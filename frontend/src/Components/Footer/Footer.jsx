import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Threadly</p>
            </div>
                  <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
                        <li><a
                                href="https://admin-threadly.vercel.app/"
                                className="footer-admin"
                                style={{ textDecoration: "none", color: "black" }}
                                >
                                    Admin
                                </a>
            </li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram_icon} alt="Instagram" /></a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://pinterest.com" target="_blank" rel="noreferrer"><img src={pinterest_icon} alt="Pinterest" /></a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><img src={whatsapp_icon} alt="WhatsApp" /></a>
                </div>

            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2026 - All Rights Reserved</p>
            </div>






        </div>
    )
}


export default Footer;