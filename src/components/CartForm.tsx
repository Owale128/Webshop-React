import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Game } from "../models/Game"
import { Form } from "../models/Form"
import '../sass/cart.scss'

interface ICartForm {
    cart: Game[];
    clearCart: () => void;
    totalPrice: number;
}

export const CartForm = ({cart, clearCart, totalPrice}: ICartForm) => {
    const[inputValue, setInputValue] = useState<Form>({
        name: '',
        email: '',
        address: ''
    })

    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const property = e.target.name;
            const value = e.target.value
            if(e.target.type === 'text'){
                setInputValue({...inputValue, [property]: value})
            }
            if(e.target.type === 'email'){
                setInputValue({...inputValue, [property]: value})
            }
    }    

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        if(cart.length === 0){
            alert('There must be at least one product in the cart to complete the purchase!')
            return
        }

        if(confirm('Click OK to complete purchase')){
            navigate('/')
            clearCart()
            setInputValue({
                name: '',
                email: '',
                address: ''
            })
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="cartForm">
            <label htmlFor="name">Name</label>
            <input type="text"
            value={inputValue.name}
            onChange={handleChange}
            name="name"
            required
            />
            <label htmlFor="email">Email</label>
            <input type="email"
            value={inputValue.email}
            onChange={handleChange}
            name="email"
            required
            />
            <label htmlFor="address">Address</label>
            <input type="text"
            value={inputValue.address}
            onChange={handleChange}
            name="address"
            required
            />
            <div className="buttonContainer">
            <button>Submit</button>
            </div>
            <div className="total">
                <h3>Total: {totalPrice} kr</h3>
            </div>
        </form>
        </>
    )
}