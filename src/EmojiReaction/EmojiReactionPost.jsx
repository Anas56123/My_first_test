import { useState } from "react";

const EmojiReactionComments = ({ post }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emoReaction, setEmoReaction] = useState(true);

  const handleEmojiClick = (emoji) => {
    if (selectedEmoji === emoji) {
      setSelectedEmoji(null);
    } else {
      setSelectedEmoji(emoji);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          if (emoReaction) {
            setEmoReaction(false);
          }
          if (!emoReaction) {
            setEmoReaction(true);
          }
        }}
      >
        {emoReaction ? "Close" : "Open"}
      </button>
      {emoReaction ? (
        <div className="emoji-reaction">
          <div>
            <div
              className={`emoji ${selectedEmoji === "like" ? "selected" : ""}`}
              onClick={() => handleEmojiClick("like")}
            >
              👍
            </div>
            <span>{selectedEmoji === "like" ? 1 : 0}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "love" ? "selected" : ""}`}
              onClick={() => handleEmojiClick("love")}
            >
              ❤️
            </div>
            <span>{selectedEmoji === "love" ? 1 : 0}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "haha" ? "selected" : ""}`}
              onClick={() => handleEmojiClick("haha")}
            >
              😄
            </div>
            <span>{selectedEmoji === "haha" ? 1 : 0}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "wow" ? "selected" : ""}`}
              onClick={() => handleEmojiClick("wow")}
            >
              🤯
            </div>
            <span>{selectedEmoji === "wow" ? 1 : 0}</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default EmojiReactionComments;
