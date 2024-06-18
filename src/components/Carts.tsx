import { Game } from "../models/Game";
import { CartList } from "./CartList";
import { CartForm } from "./CartForm";

interface ICart {
    cart: Game[];
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const Carts = ({cart, removeFromCart, clearCart}: ICart) => {


    return(
        <div className="cartsContainer">
        <div className="cartFormContainer">
        <CartForm cart={cart} clearCart={clearCart} />
        </div>
        <div className="gamesContainer">
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
        </div>
        </div>
    )
}