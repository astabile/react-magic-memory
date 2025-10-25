import './App.css'
import { useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png", "matched": false },
  { "src": "/img/potion-1.png", "matched": false },
  { "src": "/img/ring-1.png", "matched": false },
  { "src": "/img/scroll-1.png", "matched": false },
  { "src": "/img/shield-1.png", "matched": false },
  { "src": "/img/sword-1.png", "matched": false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setDisabled(false)
  }

  // handle a choice
  const handleChoice = (card) => {
    // prevent selecting the same card twice
    if (card === choiceOne) return
    
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // check if all cards are matched (game over)
  useEffect(() => {
    const allMatched = cards.length > 0 && cards.every(card => card.matched)
    if (allMatched) {
      setDisabled(true)
    }
  }, [cards])

  // start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  // check if game is over
  const gameOver = cards.length > 0 && cards.every(card => card.matched)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      {gameOver && <h2>🎉 You Won in {turns} turns! 🎉</h2>}

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App