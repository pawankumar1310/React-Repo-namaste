import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [Login, setLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-link'>
                <ul>
                    <h2>Online Status : {onlineStatus ? "✅": "🔴"}</h2>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About us</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        Login === "Login" ? setLogin("Logout") : setLogin("Login");
                    }} className="login-btn">{Login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;