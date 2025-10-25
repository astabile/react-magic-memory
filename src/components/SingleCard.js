import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const cardBackImage = '/img/cover.png'

    const handleClick = () => {
        if (!disabled && !flipped) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""} onClick={handleClick}>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src={cardBackImage} alt="card back" />
            </div>
        </div>
    )
}