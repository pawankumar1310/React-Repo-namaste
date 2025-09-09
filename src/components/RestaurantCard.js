import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // const {restaurantName, cuisins} = props;
    const {restName} = props;
    const info = restName?.card?.card?.info;
    console.log("INFO", info?.name);
    console.log(restName);
    return (
        // <div className='restaurant-card' style={styleCard}>
        <div className='restaurant-card' style={{ backgroundColor: "#f0f0f0", width: "200px" }}>
             <div className='logo-container'>
                <img className='logo' src={CDN_URL + info?.cloudinaryImageId} />
            </div>
            <h2>{info?.name}</h2>  
            <h4>{info?.avgRating} stars</h4>  
            <h2>{info?.areaName}</h2>

        </div>
    )
}

export default RestaurantCard;