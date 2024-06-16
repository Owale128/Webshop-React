import { Game } from "../models/Game";

interface ICartList {
    cart: Game
    removeFromCart: (id: number) => void;
}

export const CartList = ({cart, removeFromCart}: ICartList) => {

    return(
        <>
        <h4>{cart.name}</h4>
        <img src={cart.imageUrl} alt={cart.name} />
        <p>{cart.price}</p>
        <button onClick={() => removeFromCart(cart.id)}>Remove</button>
        </>
    )
}