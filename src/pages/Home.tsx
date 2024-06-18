import { useNavigate } from "react-router-dom"
import handIcon from '../assets/handIcon.png';
import '../sass/home.scss'
export const Home = () => {
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/gamePage')
    }

    return(
        <>
        <h1>Home</h1>
        <div className="homeContainer">
        <h1>Welcome To The Game Planet</h1>
        <button onClick={handleNavigate}>Click here to see the games</button>
        <img src={handIcon} alt="Hand icon" />
        </div>
        </>
    )
}