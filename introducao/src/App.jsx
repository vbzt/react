import './App.css'
import Events from './components/Events'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
// fora do jsx pode comentar normal m
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
