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
  
  const [word, setPickedWorld] = useState('')
  const [category, setPickedCategory] = useState('')
  const [letters, setPickedLetters] = useState( [] )

  const pickWorldAndCategory = () => { 
    // pick category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
   // pick word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  }

  const startGame = () => { 
    // random word & category
    const { word, category} = pickWorldAndCategory()

    // array of words's letter 
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())
   
    // states 
    setPickedCategory(category)
    setPickedWorld(word)
    setPickedLetters(wordLetters)

    // change screen 
    setGameStage(stages[1].name)
  }

  // letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => { 
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}></StartScreen>}
      {gameStage === 'game' && <Game verifyLetter = {verifyLetter}></Game>}
      {gameStage === 'end' && <GameOver retry = { retry }></GameOver>}
    </>
  )
}

export default App