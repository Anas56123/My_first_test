import EmojiReactionComments from "./EmojiReaction/EmojiReactionComments";
import EmojiReactionPost from "./EmojiReaction/EmojiReactionPost";

export default function LetUsTry({post}) {
  return (
    <div>
      <h1>Post</h1>
      <EmojiReactionPost post={post} />
      <h1>Comments</h1>
      <EmojiReactionComments />
    </div>
  )
}
