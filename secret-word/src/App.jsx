// css
import './App.css'

// react 
import { useCallback, useEffect, useState } from 'react'

// data 
import { wordList } from './data/words'

import StartScreen from "./components/StartScreen"
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]


const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [ words ] = useState(wordList)
  
  const [word, setPickedWord] = useState('')
  const [category, setPickedCategory] = useState('')
  const [ letters, setPickedLetters] = useState( [] )
  const [guessedLetters, setGuessedLetters] = useState( [ ] )
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(8)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => { 
    // pick category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
   // pick word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  }

  const startGame = () => { 
    // random word & category
    const { word, category} = pickWordAndCategory()

    // array of words's letter 
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())
   
    // states 
    setPickedCategory(category)
    setPickedWord(word)
    setPickedLetters(wordLetters)

    // change screen 
    setGameStage(stages[1].name)
  }

  // letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // checks if letter alr been typed
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return

    if(letters.includes(normalizedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [ ...actualGuessedLetters, normalizedLetter ])
    }else{ 
      setWrongLetters((actualWordLetters) => [...actualWordLetters, normalizedLetter])
    }

    console.log(`Certas: ${guessedLetters}`)
    console.log(`Errado`)
  }

  const retry = () => { 
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}></StartScreen>}
      {gameStage === 'game' && <Game 
      verifyLetter = {verifyLetter} 
      pickedWord = {word} 
      pickedCategory = {category} 
      letters = {letters}
      guessedLetters = {guessedLetters}
      wrongLetters = {wrongLetters} 
      guesses = { guesses }
      score = { score }
      ></Game>}
      {gameStage === 'end' && <GameOver retry = { retry }></GameOver>}
    </>
  )
}

export default App