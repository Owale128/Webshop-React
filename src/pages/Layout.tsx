import '../sass/main.scss'
import { useState } from 'react'
import { Game } from '../models/Game'
import { Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const Layout = () => {

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

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                     <NavLink to={'/'}>Home</NavLink>      
                    </li>
                        <li>
                        <NavLink to={'/gamePage'}>Games</NavLink>           
                    </li>
                    <li>
                        <NavLink to={'/cart'}>
                        <FontAwesomeIcon icon={faShoppingCart} /> 
                        {cart.length > 0 && <span className='cartBadge'>{cart.length}</span>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet context={{cart, addToCart, removeFromCart, clearCart, totalPrice}}/>
        </main>
             <footer>
                All right reserved. @2024
            </footer>
        </>
    )
}