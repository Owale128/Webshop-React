import { useOutletContext } from "react-router-dom"
import { Game } from "../models/Game"
import { Carts } from "../components/Carts"

interface ICart {
    cart: Game[]
    removeFromCart: (id:number) => void;
    clearCart: () => void;
    addToCart: (game: Game) => void;
    totalPrice: number;
}

export const Cart = () => {
    const { cart, removeFromCart, clearCart, addToCart, totalPrice} = useOutletContext<ICart>()

    return(
        <>
        <h1>Cart</h1>
        <Carts cart={cart}
         removeFromCart={removeFromCart}
          clearCart={clearCart} 
          addToCart={addToCart}
          totalPrice={totalPrice}
          />


        </>
    )
}