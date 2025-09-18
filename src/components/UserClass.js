import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
        };
    }

    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h4>Count : {count}</h4>
                <button onClick={()=>{
                    this.setState ({
                        count: count + 1,
                    });
                }}> 
                Increase Count
                </button>

            {/* <h3>Name : {this.props.name}</h3> */}
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
            <h3>Contact : 12345667</h3>
            <h3>Email : Sample@gmail.com</h3>
            <h3>LinkedIn : pawankmr1111</h3>
        </div>
        )
    }
}

export default UserClass;