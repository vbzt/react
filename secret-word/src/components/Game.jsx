import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 00</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">Dica: <span>dica</span></h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blackSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Adivinhe uma letra da palavra</p>
        <form><input type="text" name="letter" maxLength= "1" required/></form>
        <button>Adivinhar</button>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizada</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game