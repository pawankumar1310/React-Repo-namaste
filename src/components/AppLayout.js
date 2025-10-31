import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useEffect, useState } from "react";

const AppLayout = () => {
    const [username, setUsername] = useState();
    useEffect(() => {
        const data = {
            loggedInUser: "Pawan Kumar"
        }
        setUsername(data.loggedInUser);
    }, []);
    return (
        <div className='app'>
            <UserContext.Provider value={{ loggedInUser: username , setUsername}}>
                <UserContext.Provider value={{ loggedInUser: "Elon Mask" }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}

export default AppLayout;