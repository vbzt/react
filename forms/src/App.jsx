import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div>
      <MyForm user ={{name: 'vitor', email: 'vitor@email.com'}}></MyForm>
    </div>
  )
}

export default App
