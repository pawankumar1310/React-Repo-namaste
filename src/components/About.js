import User from "./User"
import UserClass from "./UserClass"

export const About = ()=>{
    return(
        <>
            <div>
                <h4>About Page...</h4>
                <User name={"Pawan Kumar"}/>
                {/** This is Class based component */}
                <UserClass name = {"Pawan K"} location = {"Azamgarh"}/>
            </div>
        </>
    )
}