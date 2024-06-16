import { NavLink, Outlet } from "react-router-dom"
import '../sass/main.scss'

export const Layout = () => {


    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                <NavLink to={'/'}>Hem</NavLink>
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
            <Outlet />
        </main>
        <footer>
            All right reserved. @2024
        </footer>
        </>
    )
}