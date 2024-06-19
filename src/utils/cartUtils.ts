import { useState, useEffect } from "react";
import { Game } from "../models/Game";
import { discountPriceFunction } from "./discountPriceUtils";


export const CartFunctions = () => {

    const cartFromLocalStorage: Game[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const[cart, setCart] = useState<Game[]>(cartFromLocalStorage)
    const [totalPrice, setTotalPrice] = useState(0);
    const{calculateDiscountPrice} = discountPriceFunction()

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setTotalPrice(calculateTotalPrice(cart));
    }, [cart]);

    const calculateTotalPrice = (cart: Game[]) => {
        return cart.reduce((total, game) => total + (game.price * game.quantity), 0);
    };

    const addToCart = (game: Game) => {
        const existingGame = cart.find(item => item.id === game.id);
        const gamePrice = game.onSale ? calculateDiscountPrice(game.price, game.discount) : game.price;
        if(existingGame) {
            const cartUpdate = cart.map(item => item.id === game.id ? 
                {...item, quantity: item.quantity + 1}
                : item
            );
            setCart(cartUpdate)
            setTotalPrice(calculateTotalPrice(cartUpdate))
        } else {
            const cartUpdate = [...cart, {...game, price: gamePrice, quantity: 1}];
            setCart(cartUpdate)
            setTotalPrice(calculateTotalPrice(cartUpdate))
        }
    }
    
    const removeFromCart = (id: number) => {
        const existingGame = cart.find(item => item.id === id);
        if(existingGame) {

            if (existingGame.quantity > 1){
                const cartUpdate = cart.map(item => item.id === id ? 
                    {...item, quantity: item.quantity - 1}
                    : item
                );
                setCart(cartUpdate);
                setTotalPrice(calculateTotalPrice(cartUpdate))
            } else{
                const cartUpdate = cart.filter((game) => game.id !== id)
                setCart(cartUpdate)
                setTotalPrice(calculateTotalPrice(cartUpdate))
            }
        }
    }
        
    const clearCart = () => {
        setCart([])
        setTotalPrice(0)
    }

    return {cart, addToCart, removeFromCart, clearCart, totalPrice}
}