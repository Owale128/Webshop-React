import { useOutletContext } from "react-router-dom"
import { Game } from "../models/Game"
import { Carts } from "../components/Carts"

interface ICart {
    cart: Game[]
    removeFromCart: (id:number) => void;
    clearCart: () => void;
}

export const Cart = () => {
    const { cart, removeFromCart, clearCart} = useOutletContext<ICart>()

    return(
        <>
        <h1>Cart</h1>

        <Carts cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
        </>
    )
}