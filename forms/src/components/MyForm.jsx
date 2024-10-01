import { useState } from 'react'
import styles from './MyForm.module.css'
const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const handleName = (e) => { 
    setName(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    setName('')
    setEmail('')
  
  }

  return (
    <>
      
    <form onSubmit={handleSubmit} className= {styles.form}>
      <label>
        <span>Nome</span>
        <input type="text" name = 'name' value = {name} placeholder='...' onChange={handleName} />
      </label>

      <label>
        <span>E-mail</span>
        <input type="email" name="email" value = {email} placeholder="..." onChange={(e) => { setEmail(e.target.value)} } />
      </label>

    <label> 
      <span>Bio:</span>
      <textarea name="bio"></textarea>
    </label>
      <button type="submit">Enviar</button>
    </form>

    </>
  )
}

export default MyForm