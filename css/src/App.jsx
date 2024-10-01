import MyComponent from './components/MyComponent'
import Title from './components/Title'
import './App.css'
import { useState } from 'react'

function App() {
  const [ counter, setCounter ] = useState(0)
  const [ redTitle, setClass] = useState(true) 


  return (
    <div>
      <h1>React com css</h1>
      <MyComponent></MyComponent>

      <button onClick={() =>  setCounter((counter) => counter + 1) }>Inline dinamico</button>
      <p>Valor: {counter}</p>
      <h3 style={counter < 10 ? ({color: 'white'}) : ({color: 'blueviolet'}) }>Eu mudo de cor quando o counter chega em 10!</h3>

    
     <button onClick={() =>  setClass((redTitle) => redTitle ? false : true) }>Classe dinamico</button>
     <h3 className= { redTitle ? "redTitle" : "title"}>Classe dinamica com css</h3>

    <Title></Title>
      
  </div>
  )
}

export default App
