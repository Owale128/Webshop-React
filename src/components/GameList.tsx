import '../sass/games.scss'
import { useState } from 'react';
import { Game } from "../models/Game"
import { GameModal } from './GameModal';

interface IGameList{
game: Game
addToCart: (game: Game) => void;
}

export const GameList = ({game, addToCart}: IGameList) => {
            const [showModal, setShowModal] = useState(false);

            const openModal = () => setShowModal(true)
            const closeModal = () => setShowModal(false)

    return(
        <div className="gameItem">
        <div className="imageContainer">
        <img src={game.imageUrl} alt={game.imageUrl} title="Click for more info" onClick={openModal}/>
        </div>
        <p>{game.name}</p>
        <p>Price: {game.price}Kr</p>
        <button onClick={() => addToCart(game)}>Add to cart</button>
        {showModal && (
        <GameModal game={game} onClose={closeModal} />
        )}
        </div>
    )
}