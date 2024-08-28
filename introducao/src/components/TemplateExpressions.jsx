import MyComponent from "./MyComponent"

function TemplateExpressions() {
  const name = 'bzt'
  const data = { 
    age: 16,
    job: "programador"
  }

  return (
    <div>
      <p>{name} tem {data.age} anos e é um {data.job}!</p>
      <MyComponent></MyComponent>

    </div>
  )
}

export default TemplateExpressions