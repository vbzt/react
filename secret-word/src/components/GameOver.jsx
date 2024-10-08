import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className="start">
      <h1>Fim de jogo!</h1>
      <h3>Pontuação: <span>{ score }</span> </h3>
      <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default GameOver