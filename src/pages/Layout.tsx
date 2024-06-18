import '../sass/main.scss'
import { CartFunctions } from '../utils/cartUtils'
import { Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const Layout = () => {
const {cart, addToCart, removeFromCart, clearCart, totalPrice} = CartFunctions()


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