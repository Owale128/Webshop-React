import { useState } from 'react'
import '../sass/main.scss'
import { Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import { Game } from '../models/Game'



export const Layout = () => {

    const[cart, setCart] = useState<Game[]>([])

    const addToCart = (game: Game) => {
        setCart([...cart, game])
    }

    const removeFromCart = (id: number) => {
        setCart(cart.filter((game) => game.id !== id))
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
                <NavLink to={'/cart'}>Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet context={{cart, addToCart, removeFromCart}}/>
        </main>
             <footer>
                All right reserved. @2024
            </footer>
        </>
    )
}