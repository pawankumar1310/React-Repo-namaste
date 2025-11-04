import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [restaurantDataList, setRestaurantList] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");
    const { loggedInUser, setUsername } = useContext(UserContext);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // const arr = useState(restaurantList);
    // const restaurantDataList = arr[0];
    // const setRestaurantList = arr[1];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        // const jsonData = await response.json();
        // console.log(jsonData);
        setRestaurantList(restaurantDataList);
    };



    // Conditional Rendering
    if (restaurantDataList.length === 0) {
        // return <h1>Loading...</h1>
        return <Shimmer />
    }


    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) {
        return (
            <>
                <h1>You are offline, Please check your internet connection !!</h1>
            </>
        )
    }

    return (
        <>
            <div>{loggedInUser}</div>
            <div className='body'>
                <div className='m-4 p-4'>
                    <input 
                    className="border border-solid border-black" 
                    type="text" 
                    data-testid="searchInput"
                    value={searchInput} 
                    onChange={
                        (e) => {
                            setSearchInput(e.target.value);
                        }
                    } />
                    <button
                        onClick={() => {
                            const searchData = restaurantList.filter((res) => res?.card?.card?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));
                            setRestaurantList(searchData);
                        }}
                        className="px-4 m-2 bg-blue-200 rounded-lg cursor-pointer">Search</button>
                    <button
                        className="px-4 m-2 bg-green-200 rounded-lg cursor-pointer"
                        onClick={() => {
                            const filterListData = restaurantList.filter((res) => res?.card?.card?.info?.avgRating > 4.3);
                            setRestaurantList(filterListData);
                        }}>Filter Top rated Restaurant</button>
                    <label>User Name : </label>
                    <input className="border border-solid border-black p-2" type="text" value={loggedInUser} onChange={
                        (e) => {
                            setUsername(e.target.value);
                        }
                    } />
                </div>
                <div className='flex wrap'>
                    {/* <RestaurantCard restName = {restObject} /> */}
                    {
                        restaurantDataList.map((restaurant) => (
                            <Link
                                to={"/restaurant/" + restaurant?.card?.card?.info?.id}
                                key={restaurant?.card?.card?.info?.id}
                            >
                                {restaurant?.card?.card?.info?.promoted ? <RestaurantCardPromoted restName={restaurant} /> : <RestaurantCard restName={restaurant} />}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Body;