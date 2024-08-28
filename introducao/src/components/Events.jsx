function Events() {
  const handleButtonClick = (e) => { 
    console.log(e)
    alert('Fui clicado!') 
  }

  const render = (x) => { 
    if(x){ 
      return <h3>Renderizando X</h3>
    }else{ 
     return  <h3>Renderizando else </h3>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleButtonClick}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => alert('Clicou denovo')}>Clique em mim denovo</button>
      </div>
      {render(true)}
    </div>
  )
}

export default Events