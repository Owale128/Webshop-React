import { useNavigate } from "react-router-dom"
import handIcon from '../assets/handIcon.png';
import '../sass/Home.scss'
export const Home = () => {
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/gamePage')
    }

    return(
        <>
        <h1>Home</h1>
        <div className="homeContainer">
        <h2>Welcome To The Game Planet</h2>
        <button onClick={handleNavigate}>Click here to see the games</button>
        <img src={handIcon} alt="Hand icon" />
        </div>
        </>
    )
}