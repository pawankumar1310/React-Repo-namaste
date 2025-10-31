import { CDN_URL } from "../utils/constants";

export const ItemList = ({ items }) => {

    console.log("Items : ", items);
    return (
        <>
            <div>
                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 bg-gray-200 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                <div className="font-bold"> ₹ {item.card.info.price / 100}</div>
                                <div > ⭐ {item.card.info.ratings.aggregatedRating.rating}</div>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div  className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                                Add +
                            </button>
                        </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full"></img>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}