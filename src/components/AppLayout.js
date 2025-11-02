import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

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
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
                    <UserContext.Provider value={{ loggedInUser: "Elon Mask" }}>
                        <Header />
                    </UserContext.Provider>
                    <Outlet />
                </UserContext.Provider>
            </Provider>

        </div>
    )
}

export default AppLayout;