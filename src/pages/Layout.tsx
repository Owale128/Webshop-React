
import '../sass/main.scss'
import { Outlet } from "react-router-dom"
import { NavLink, useLocation } from "react-router-dom"




export const Layout = () => {



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
            <Outlet />
        </main>
             <footer>
                All right reserved. @2024
            </footer>
        </>
    )
}