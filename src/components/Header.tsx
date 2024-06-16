import { NavLink } from "react-router-dom"
import '../sass/footerHeader.scss'

export const Header = () => {

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
        </>
    )
}