import { useState } from 'react'
import '../sass/main.scss'
import { Outlet } from "react-router-dom"
import { NavLink, useLocation } from "react-router-dom"
import { Game } from '../models/Game'



export const Layout = () => {

    const[cart, setCart] = useState<Game[]>([])

    const addToCart = (game: Game) => {
        setCart([...cart, game])
    }

    const removeFromCart = (id: number) => {
        setCart(cart.filter((game) => game.id !== id))
    }

    const location = useLocation()
    const isHome = location.pathname === '/';
    const isGame = location.pathname === '/gamePage';
    const isCart = location.pathname === '/cart';
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        {!isHome &&(
                            <NavLink to={'/'}>Home</NavLink>
                        )}
                    </li>
                        <li>
                        {!isGame && (
                        <NavLink to={'/gamePage'}>Games</NavLink>
                        )}
                    </li>
                    <li>
                        {!isCart && (
                            <NavLink to={'/cart'}>Cart</NavLink>
                        )}

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