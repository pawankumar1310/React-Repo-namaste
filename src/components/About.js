import { useContext } from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

export const About = ()=>{
    const {loggedInUser} = useContext(UserContext);
    return(
        <>
            <div>
                <h4>About Page...</h4>
                <User name={loggedInUser}/>
                {/** This is Class based component */}
                <UserClass name = {"First Name "} location = {"Azamgarh"}/>
                <UserClass name = {"Second Name"} location = {"Banaras"}/>
            </div>
        </>
    )
}