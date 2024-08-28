// css 
import './App.css'

// components 
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
// fora do jsx pode comentar normal 
const App = () => {
  return (
    <div>
      <h2>Hello World</h2> {/* Comentario em jsx */}
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>
    </div>
  )
}

export default App
