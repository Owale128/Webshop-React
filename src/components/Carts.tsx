import { Game } from "../models/Game";
import { CartList } from "./CartList";

interface ICart {
    cart: Game[];
    removeFromCart: (id: number) => void;
}

export const Carts = ({cart, removeFromCart}: ICart) => {


    return(
        <>
            {cart.map((c) =>(
                <CartList 
                key={c.id}
                cart={c}
                removeFromCart={removeFromCart}
                />
            ))}
        </>
    )
}