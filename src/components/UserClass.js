import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
            userInfo : {
                name : "dummy",
                location : "Default",
            },
        };
    }

    // componentDidMount(){
    //     console.log("This method will call after render component");
    // }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/pawankumar1310");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json
        });
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        // const {name, location} = this.props;
        const {name, location} = this.state.userInfo;
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