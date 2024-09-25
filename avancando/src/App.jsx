import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import Username from './components/Username'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecFunction from './components/ExecFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [ username ] = useState('Vitor')

  const cars = [ 
    { id: 1, brand: 'Ferrari', km: 0, color: 'Vermelha', newCar: true },
    { id: 2, brand: 'Lamborghini', km: 5000, color: 'Branca', newCar: false },
    { id: 3, brand: 'Honda', km: 0, color: 'Preto', newCar: true }
  ]

  const showMessage = () => {
    console.log('msg')
  }

  const [ message, setMessage ] = useState('')
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>

    {/* Imagem em public */}  
    <div>
      <img src="/sunset.jpg" alt="sunset" />
    </div>

    {/* Imagem em assets */}
      <div>
        <img src= {City} alt="City lights" />
      </div>
      <ManageData></ManageData>

      <ListRender></ListRender>

      <ConditionalRender></ConditionalRender>

      <Username name = {username}></Username>
      
      <CarDetails brand = 'VW' km = {100000} color = 'branco' newCar = {false}></CarDetails>

      {cars.map((car) => (
        <CarDetails key = {car.id}  brand = {car.brand} km = {car.km} color = {car.color} newCar = {car.newCar}></CarDetails>
      ))}

      <Fragments></Fragments>

      <Container>
        <p>Conteudo children</p>
      </Container>

      <ExecFunction myFunction = {showMessage}></ExecFunction>

      <Message msg = { message }></Message>

      <ChangeMessageState handleMessage = {handleMessage}></ChangeMessageState>


    </div>
  )
}

export default App
