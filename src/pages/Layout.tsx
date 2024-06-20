import '../sass/main.css'
import { CartFunctions } from '../utils/cartUtils'
import { Outlet, useLocation } from "react-router-dom"
import { NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const Layout = () => {
const {cart, addToCart, removeFromCart, clearCart, totalPrice} = CartFunctions()

const location = useLocation();
const isHome = location.pathname === '/';
const isGamePage = location.pathname === '/gamePage'
const isCartPage = location.pathname === '/cart'

    return(
        <>
        <header>
            <nav>
                <ul>
                {!isHome && (
                            <>
                                <li>
                                    <NavLink to={'/'}>Home</NavLink>
                                </li>
                                {!isGamePage && (
                                    <li>
                                        <NavLink to={'/gamePage'}>Games</NavLink>
                                    </li>
                                )}
                            </>
                        )}
                    {!isCartPage && (
                            <li>
                                <NavLink to={'/cart'}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    {cart.length > 0 && <span className='cartBadge'>{cart.length}</span>}
                                </NavLink>
                            </li>
                        )}
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