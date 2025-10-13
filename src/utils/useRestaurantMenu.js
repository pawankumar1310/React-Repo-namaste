import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";


const useRestaurantMenu = (resId)=>{
    const [restaurantDataList, setRestaurantList] = useState(restaurantList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const filterData = restaurantDataList.filter((rest) => rest?.card?.card?.info?.id === resId);
        await setRestaurantList(filterData);
    }
    return restaurantDataList;
}

export default useRestaurantMenu;