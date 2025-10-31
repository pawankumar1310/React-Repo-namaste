import { useState } from "react"
import { swiggyData } from "../utils/swiggyData"
import Shimmer from "./Shimmer";
import { RestaurantCategory } from "./RestaurantCategory";

export const Swiggy = () => {
    const [showIndex, setShowIndex] = useState(false);
    
    const [swiggyDataList, setSwiggyDataList] = useState(swiggyData.cards);

    const categories = swiggyDataList.filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    console.log("Category : ", categories);
    if (swiggyData.cards.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> Swiggy One Restaurant Menu</h1>
            <h2>
                {categories.map((category, index) => <li key={category?.card?.card?.categoryId}>
                    <RestaurantCategory 
                    showItems={index === showIndex ? true : false}
                    data={category?.card?.card}
                    setShowIndex={()=> setShowIndex(index)} /></li>)}
            </h2>
        </div>
    )
}