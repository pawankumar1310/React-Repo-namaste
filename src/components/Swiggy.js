import { useState } from "react"
import { swiggyData } from "../utils/swiggyData"
import Shimmer from "./Shimmer";
import { RestaurantCategory } from "./RestaurantCategory";

export const Swiggy = ()=>{

    const [swiggyDataList, setSwiggyDataList] = useState(swiggyData.cards);

    const categories = swiggyDataList.filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    console.log("Category : ", categories);
    if(swiggyData.cards.length === 0)
    {
      return  <Shimmer />
    }
    return(
         <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> Swiggy One Restaurant Menu</h1>
            <h2>
                {categories.map((category) => <li key={category?.card?.card?.categoryId}><RestaurantCategory data ={category?.card?.card}/></li>)}
            </h2>
        </div>
    )
}