import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(true)

  const [name, setName] = useState('Joao')

  return (
    <div>
      <h1>Isso sera exibido</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, nao</p>}

      {name === "Joao" ? 
      (
        <div><p>O nome é Joao</p></div>
      )
      : 
      (
        <div><p>O nome não é Joao</p></div>
      )}

      <button onClick={() => setName('Matheus')}>Mudar nome</button>
    </div>
    
  )
}

export default ConditionalRender