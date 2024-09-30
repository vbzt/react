import MyComponent from './components/MyComponent'
import './App.css'
import { useState } from 'react'

function App() {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <h1>React com css</h1>
      <MyComponent></MyComponent>
      <button onClick={() =>  setCounter((counter) => counter + 1) }>Inline dinamico</button>
      <p>Valor: {counter}</p>
      <h3 style={counter < 10 ? ({color: 'white'}) : ({color: 'blueviolet'}) }>Eu mudo de cor quando o counter chega em 10!</h3>
      
  </div>
  )
}

export default App
