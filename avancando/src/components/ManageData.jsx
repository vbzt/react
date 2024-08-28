import { useState } from 'react'

const ManageData = () => {
  let [number, setNumber] = useState(0)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber((number) => number + 1   )} >Aumentar valor</button>
    </div>
  )
}

export default ManageData