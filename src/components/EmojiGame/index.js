import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, isGameInProgress: true, clickedEmojisList: []}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  getWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const iswon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLose
        isWon={iswon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  endGame = curScore => {
    const {topScore} = this.state
    if (topScore < curScore) {
      this.setState({topScore: curScore, isGameInProgress: false})
    }
    this.setState({isGameInProgress: false})
  }

  checkIsEmojiClicked = id => {
    const {clickedEmojisList} = this.state
    const checkEmojiPresent = clickedEmojisList.includes(id)
    if (!checkEmojiPresent) {
      this.setState(prev => ({
        clickedEmojisList: [...prev.clickedEmojisList, id],
      }))
    } else {
      this.endGame(clickedEmojisList.length)
    }
  }

  getEmojisList = () => {
    const ShuffledList = this.getShuffledEmojisList()
    return (
      <ul className="unordered-list">
        {ShuffledList.map(each => (
          <EmojiCard
            emoji={each}
            key={each.id}
            clickEmoji={this.checkIsEmojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameInProgress, clickedEmojisList} = this.state
    return (
      <div>
        <div>
          <NavBar
            topScore={topScore}
            isGameInProgress={isGameInProgress}
            score={clickedEmojisList.length}
          />
        </div>
        <div className="emoji-game-body">
          {isGameInProgress ? this.getEmojisList() : this.getWinOrLose()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
