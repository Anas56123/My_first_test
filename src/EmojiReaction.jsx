// EmojiReaction.js

import { useState } from 'react';

const EmojiReaction = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    if (selectedEmoji === emoji) {
      setSelectedEmoji(null);
    } else {
      setSelectedEmoji(emoji);
    }
  };

  return (
    <div className="emoji-reaction">
      <div className={`emoji ${selectedEmoji === 'like' ? 'selected' : ''}`} onClick={() => handleEmojiClick('like')}>
        👍
      </div>
      <div className={`emoji ${selectedEmoji === 'love' ? 'selected' : ''}`} onClick={() => handleEmojiClick('love')}>
        ❤️
      </div>
      <div className={`emoji ${selectedEmoji === 'haha' ? 'selected' : ''}`} onClick={() => handleEmojiClick('haha')}>
        😄
      </div>
      {/* Add more emoji buttons as needed */}
    </div>
  );
};

export default EmojiReaction;