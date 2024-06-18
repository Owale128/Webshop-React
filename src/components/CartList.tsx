import { Game } from "../models/Game";
import '../sass/cart.scss';

interface ICartList {
    cart: Game
    removeFromCart: (id: number) => void;
}

export const CartList = ({cart, removeFromCart}: ICartList) => {

    return(
        
            <div className="gameContainer">
                <h4>{cart.name}</h4>
                <img src={cart.imageUrl} alt={cart.name} />
                <p>{cart.price}Kr</p>
                <button onClick={() => removeFromCart(cart.id)}>Remove</button>
            </div>
    
    )
}