import User from "./User"
import UserClass from "./UserClass"

export const About = ()=>{
    return(
        <>
            <div>
                <h4>About Page...</h4>
                <User name={"Pawan Kumar"}/>
                {/** This is Class based component */}
                <UserClass name = {"First Name"} location = {"Azamgarh"}/>
                <UserClass name = {"Second Name"} location = {"Banaras"}/>
            </div>
        </>
    )
}