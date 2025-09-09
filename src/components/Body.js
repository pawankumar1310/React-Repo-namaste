import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
     const [restaurantDataList, setRestaurantList] = useState(restaurantList);

    // const arr = useState(restaurantList);
    // const restaurantDataList = arr[0];
    // const setRestaurantList = arr[1];

    return (
        <div className='body'>
            <div className='filter'>
                <button
                    className="filter-btn"
                    onClick={()=>{
                        const filterListData = restaurantList.filter((res) => res?.card?.card?.info?.avgRating > 4.3);
                        setRestaurantList(filterListData);
                    }}>Filter Top rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {/* <RestaurantCard restName = {restObject} /> */}
                {
                    restaurantDataList.map((restaurant) => (
                        <RestaurantCard key={restaurant?.card?.card?.info?.id} restName={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;