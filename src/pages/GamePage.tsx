import { gamesData } from "../data/gamesData"
import { Games } from "../components/Games"
import { Game } from "../models/Game"
import { useOutletContext } from "react-router-dom"

interface IGamePage {
    addToCart: (game: Game) => void;
}

export const GamePage = () => {
        const {addToCart} = useOutletContext<IGamePage>()

return(
        <>
        <Games games={gamesData} addToCart={addToCart} />
        </>
    )
}