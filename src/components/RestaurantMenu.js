import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [restaurantDataList, setRestaurantList] = useState(restaurantList);

    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const filterData = restaurantDataList.filter((rest) => rest?.card?.card?.info?.id === resId);
        await setRestaurantList(filterData);
    }

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
                    (<li key={rest?.card?.card?.info?.id}>{rest?.card?.card?.info?.name} : {rest?.card?.card?.info?.costForTwo}</li>))}
            </h2>
        </div>
    )
}

export default RestaurantMenu;