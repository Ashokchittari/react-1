import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emoji
  const onclick = () => {
    clickEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onclick}>
        <img src={emojiUrl} className="image" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
