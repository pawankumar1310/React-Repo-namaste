import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

 export const Cart = () => {
    const  cartItems= useSelector((store) => store.cart.items);
    console.log("sdfds", cartItems);

    const dispatch = useDispatch();

    const handleClearCart = ()=>
    {
        dispatch(clearCart());
    }
    return(
        <>
            <div className="text-center m-3 p-2">
                <h1 className="font-bold text-2xl">Cart</h1>
                <button className="font-bold cursor-pointer rounded-2xl m-2 p-2" onClick={handleClearCart}>Clear Cart</button>
                <div className="text-center w-6/12 m-auto">
                {cartItems.length === 0 && (<h1>Cart is empty. Please add items to the cart!</h1>)}
                    <ItemList items={cartItems}/>
                </div>
            </div>
        </>
    )
};