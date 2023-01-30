// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, score} = props
  return (
    <nav className="nav-bg">
      <div className="container">
        <div className="nav-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="nav-2">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
