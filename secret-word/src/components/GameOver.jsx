const GameOver = ({ retry }) => {
  return (
    <div className="start">
      <h1>GameOver</h1>
      <button onClick={retry}>Retry</button>
    </div>
  )
}

export default GameOver