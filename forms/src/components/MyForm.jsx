import { useState } from 'react'
import styles from './MyForm.module.css'
const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => { 
    setName(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  
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
      <textarea value = { bio } onChange={(e) => {setBio(e.target.value)}} name="bio"></textarea>
    </label>

    <label>
      <span>Função no sistema</span>
      <select defaultValue={'DEFAULT'} name="role" value = {role} onChange={(e) => {setRole(e.target.value)}}>
        <option value="DEFAULT" disabled>Selecione sua função</option>
        <option value="user">Usuário</option>
        <option value="editor">Editor</option>
        <option value="admin">Administrador</option>
      </select>
    </label>


      <button type="submit">Enviar</button>
    </form>

    </>
  )
}

export default MyForm