import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // const {restaurantName, cuisins} = props;
    const {restName} = props;
    const info = restName?.card?.card?.info;
    return (
        // <div className='restaurant-card' style={styleCard}>
        <div data-testid="restCard" className='restaurant-card' style={{ backgroundColor: "#f0f0f0", width: "200px" }}>
             <div className='logo-container'>
                <img className='logo' src={CDN_URL + info?.cloudinaryImageId} />
            </div>
            <h2>{info?.name}</h2>  
            <h4>{info?.avgRating} stars</h4>  
            <h2>{info?.areaName}</h2>

        </div>
    )
}

// Higher order component
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="bg-black absolute text-white m-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;