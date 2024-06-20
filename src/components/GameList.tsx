import '../sass/games.css'
import { Game } from "../models/Game"
import { GameModal } from './GameModal';
import { ModalFunctions } from '../utils/modalUtils';
import { discountPriceFunction } from '../utils/discountPriceUtils';

    interface IGameList{
        game: Game
        addToCart: (game: Game) => void;
    }

export const GameList = ({game, addToCart}: IGameList) => {
    const { showModal, openModal, closeModal } = ModalFunctions();
    const { calculateDiscountPrice } = discountPriceFunction()
    
    return(
        <div className="gameItem">
        <div className="imageContainer">
        {game.onSale && (
                    <div className="discountBadge">
                        {game.discount}% OFF
                    </div>
                )}
        <img src={game.imageUrl} alt={game.imageUrl} title="Click for more info" onClick={openModal}/>
        </div>
        <p>{game.name}</p>
        <p>Price: {game.onSale ? (
            <>
            <span className='originalPrice'>{game.price}Kr</span>
            <span className='salePrice'>{calculateDiscountPrice(game.price, game.discount)}Kr</span>
            </>
            ) : (
                `${game.price}`
        )}
        </p>
        <button onClick={() => addToCart(game)}>Add to cart</button>
        {showModal && (
        <GameModal game={game} onClose={closeModal} />
        )}
        </div>
    )
}