import { Game } from "../models/Game"

interface IGameList{
game: Game
addToCart: (game: Game) => void;
}

export const GameList = ({game, addToCart}: IGameList) => {


    return(
        <>
        <h3>{game.name}</h3>
        <img src={game.imageUrl} alt={game.imageUrl} />
        <p>{game.price}</p>
        <button onClick={() => addToCart(game)}>Add to cart</button>
        </>
    )
}