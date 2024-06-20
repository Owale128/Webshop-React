import { Game } from "../models/Game"
import '../sass/modal.scss'

interface IGameModal {
    game: Game;
    onClose: () => void;
}

export const GameModal = ({game, onClose}: IGameModal) => {

    return(
        <div className="modal">
            <div className="modalContent">
                <span className="close" onClick={onClose}>&times;</span>
                    <h2>{game.name}</h2>
                    <img src={game.imageUrl} alt={game.name} />
                    <p>{game.description}</p>
            </div>
        </div>
    )
}