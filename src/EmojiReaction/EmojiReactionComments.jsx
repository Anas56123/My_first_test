import { useState } from "react";

const EmojiReactionComments = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emoReaction, setEmoReaction] = useState(false);

  const handleEmojiClick = (emoji) => {
    if (selectedEmoji === emoji) {
      setSelectedEmoji(null);
    } else {
      setSelectedEmoji(emoji);
    }
  };

  return (
    <div
      className={`open-close ${emoReaction ? "active" : ''}`}
      onMouseEnter={() => {
        setEmoReaction(true);
      }}
      onMouseLeave={() => {
        setEmoReaction(false);
      }}
    >
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
        ""
      )}
      <p className="open-close-p">{emoReaction ? "Close" : "Open"}</p>
    </div>
  );
};

export default EmojiReactionComments;
