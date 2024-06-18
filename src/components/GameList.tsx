import { Game } from "../models/Game"
import '../sass/gameList.scss'

interface IGameList{
game: Game
addToCart: (game: Game) => void;
}

export const GameList = ({game, addToCart}: IGameList) => {


    return(
        <div className="gameItem">
        <div className="imageContainer">
        <img src={game.imageUrl} alt={game.imageUrl} title="Click for more info"/>
        </div>
        <p>{game.name}</p>
        <p>Price: {game.price}Kr</p>
        <button onClick={() => addToCart(game)}>Add to cart</button>
        </div>
    )
}