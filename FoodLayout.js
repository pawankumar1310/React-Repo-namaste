import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg'/>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
    width: "200px"
}

const RestaurantCard = () =>{
    return (
        // <div className='restaurant-card' style={styleCard}>
        <div className='restaurant-card' style={{ backgroundColor : "#f0f0f0", width: "200px"}}>
            <h2>Meghana Food</h2>
        </div>
    )
}

const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restaurant-container'>
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('foodApp'));
root.render(<AppLayout />);