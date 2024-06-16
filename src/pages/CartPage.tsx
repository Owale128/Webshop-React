import { useOutletContext } from "react-router-dom"
import { Game } from "../models/Game"
import { Carts } from "../components/Carts"

interface ICart {
    cart: Game[]
    removeFromCart: (id:number) => void;
}

export const Cart = () => {
    const { cart, removeFromCart} = useOutletContext<ICart>()

    return(
        <>
        <h1>Cart Page</h1>
        <Carts cart={cart} removeFromCart={removeFromCart}/>
        </>
    )
}