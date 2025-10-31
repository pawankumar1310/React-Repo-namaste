import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
    const [Login, setLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-blue-50 lg:bg-green-50'>
            <div className='logo-container'>
                <img className='w-40' src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <h2>Online Status : {onlineStatus ? "✅": "🔴"}</h2>
                    <li className="px-3">
                        <Link to ="/">Home</Link>
                    </li>
                    <li className="px-3">
                        <Link to ="/swiggy">Swiggy</Link>
                    </li>
                    <li className="px-3">
                        <Link to ="/about">About us</Link>
                    </li>
                    <li className="px-3">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-3">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li className="px-3">Cart</li>
                    <button onClick={()=>{
                        Login === "Login" ? setLogin("Logout") : setLogin("Login");
                    }} className="cursor-pointer bg-blue-300 rounded-lg p-1">{Login}</button>
                     <li className="px-3 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;