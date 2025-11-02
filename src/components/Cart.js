import { useSelector } from "react-redux";
import { ItemList } from "./ItemList";

 export const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log("sdfds", cartItems);
    return(
        <>
            <div className="text-center m-3 p-2">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="">
                    <ItemList key={cartItems?.card?.info?.id} items={cartItems}/>
                </div>
            </div>
        </>
    )
};