import { Game } from "../models/Game";
import { GameList } from "./GameList";

interface IGames {
games: Game[];
addToCart: (game: Game) => void;
}

export const Games = ({games, addToCart}: IGames) => {
    
    return(
        <div className="gameList">
            {games.map((game) =>(
                <GameList 
                key={game.id}
                game={game}
                addToCart={addToCart}
                />
            ))}
        </div>
    )
}