import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    

    const {resId} = useParams();

    const restaurantDataList =  useRestaurantMenu(resId);

    if (restaurantDataList.length === 0) {
        return <Shimmer />
    }

    //const {restInfo} = restaurantDataList?.card?.card?.info;
    //console.log(restInfo);
    return(
        <div className="menu">
            <h1>Restaurant Menu</h1>
            <h2>
                {restaurantDataList.map((rest) => 
                    (<li key={rest?.card?.card?.info?.id}>
                        {rest?.card?.card?.info?.name} : {rest?.card?.card?.info?.costForTwo}</li>))}
            </h2>
        </div>
    )
}

export default RestaurantMenu;