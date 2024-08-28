import './App.css'

import City from './assets/city.jpg'
import ManageData from './components/ManageData'

function App() {
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
    </div>
  )
}

export default App
