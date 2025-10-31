import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
        setShowItems(!showItems);
    };

    return (
        <>
            <div className="w-6/12 mx-auto bg-gray my-4 shadow-lg  ">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    {/* Header ^▽△ */}
                    <span>{data.title} ({data?.categories[0]?.itemCards?.length})</span>
                    <span>▽</span>
                </div>
                {/* Accordion body */}
                {showItems && <ItemList items={data?.categories[0]?.itemCards} />}
            </div>
        </>
    )
}