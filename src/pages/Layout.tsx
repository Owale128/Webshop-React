import '../sass/main.scss'
import { useState } from 'react'
import { Game } from '../models/Game'
import { Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const Layout = () => {

    const[cart, setCart] = useState<Game[]>([])

    const addToCart = (game: Game) => {
        setCart([...cart, game])
    }
    
    const removeFromCart = (id: number) => {
        setCart(cart.filter((game) => game.id !== id))
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
            <Outlet context={{cart, addToCart, removeFromCart, clearCart}}/>
        </main>
             <footer>
                All right reserved. @2024
            </footer>
        </>
    )
}