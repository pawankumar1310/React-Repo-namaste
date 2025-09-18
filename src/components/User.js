const User = (props)=>{
    return(
        <div className="user-card">
            <h3>Name : {props.name}</h3>
            <h3>Location : Azamgarh</h3>
            <h3>Contact : 12345667</h3>
            <h3>Email : Sample@gmail.com</h3>
            <h3>LinkedIn : pawankmr1111</h3>
        </div>
    )
}

export default User;