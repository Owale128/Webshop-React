import { Game } from "../models/Game";
import { CartList } from "./CartList";

interface ICart {
    cart: Game[];
    removeFromCart: (id: number) => void;
}

export const Carts = ({cart, removeFromCart}: ICart) => {


    return(
        <>
        {cart.length === 0 ?  (
            <h2>Your cart is empty</h2>
        ):(
            cart.map((c) =>(
                <CartList 
                key={c.id}
                cart={c}
                removeFromCart={removeFromCart}
                />
            ))
        )}
        </>
    )
}