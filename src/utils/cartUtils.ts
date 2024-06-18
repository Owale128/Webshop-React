import { useState } from "react";
import { Game } from "../models/Game";

export const CartFunctions = () => {

    const[cart, setCart] = useState<Game[]>([])
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (game: Game) => {
        const existingGame = cart.find(item => item.id === game.id);
        if(existingGame) {
            setCart(cart.map(item => item.id === game.id ? 
                {...item, quantity: item.quantity + 1}
                : item
            ));
            setTotalPrice(totalPrice + game.price)
        } else {
            setCart([...cart, {...game, quantity: 1}])
            setTotalPrice(totalPrice + game.price)
        }
    }
    
    const removeFromCart = (id: number) => {
        const existingGame = cart.find(item => item.id === id);
        if(existingGame && existingGame.quantity > 1){
            setCart(cart.map(item => item.id === id ? 
                {...item, quantity: item.quantity - 1}
                : item
            ));
            setTotalPrice(totalPrice - existingGame.price)
        } else if (existingGame){
            setCart(cart.filter((game) => game.id !== id))
            setTotalPrice(totalPrice - existingGame.price)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return {cart, addToCart, removeFromCart, clearCart, totalPrice}
}