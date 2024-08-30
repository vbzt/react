import { useState } from "react"

const ListRender = () => {

  const [list] = useState(["Matheus", "Pedro", 'Vitor'])

  const [users, setUsers] = useState([
    {id:1, name: 'Matheus', age: 29},
    {id:2, name: 'Pedro', age: 12},
    {id:3, name: 'Vitor', age: 16}
  ])

  
  const deleteRandom = () => {
    const randomNum = Math.floor(Math.random() * 4 ) 

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNum !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => ( 
          <li key = {user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender