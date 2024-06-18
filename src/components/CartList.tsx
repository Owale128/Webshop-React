import { Game } from "../models/Game";
import '../sass/cart.scss';

interface ICartList {
    cart: Game
    removeFromCart: (id: number) => void;
    addToCart: (game: Game) => void;
}

export const CartList = ({cart, removeFromCart, addToCart}: ICartList) => {

    return(
        
            <div className="gameContainer">
                <h4>{cart.name}</h4>
                <img src={cart.imageUrl} alt={cart.name} />
                <p>{cart.price} Kr</p>
                <div className="quantityContainer">
                <button onClick={() => removeFromCart(cart.id)}>-</button>
                <span>{cart.quantity}</span>
                <button onClick={() => addToCart(cart)}>+</button>
                </div>
            </div>
    
    )
}