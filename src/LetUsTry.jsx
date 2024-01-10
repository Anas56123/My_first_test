import { useState } from "react";

export default function LetUsTry() {
  const [emoLove, setEmoLove] = useState([0]);
  const [emoLike, setEmoLike] = useState([0]);
  const [emoLaugh, setEmoLaugh] = useState([0]);
  const [emoWaaaoo, setEmoWaaaoo] = useState([0]);

  function addEmo(state, setState, index) {
    state[index]? '' : state[index] = 0;
    if (emoLove[index] + emoLike[index] + emoLaugh[index] + emoWaaaoo[index] >= 1) {
      setEmoLove(state[index] = 0);
      setEmoLike(state[index] = 0);
      setEmoLaugh(state[index] = 0);
      setEmoWaaaoo(state[index] = 0);
    }
    if (state[index] >= 1) return;
    setState(state[index] = [1]);
  }

  return (
    <>
      <div className="emos">
        <div className="love">
          <button onClick={() => addEmo(emoLove, setEmoLove, 0)}>❤️</button>
          <p>{emoLove}</p>
        </div>
        <div className="like">
          <button onClick={() => addEmo(emoLike, setEmoLike, 0)}>👍</button>
          <p>{emoLike}</p>
        </div>
        <div className="laugh">
          <button onClick={() => addEmo(emoLaugh, setEmoLaugh, 0)}>🤣</button>
          <p>{emoLaugh}</p>
        </div>
        <div className="waaaoo">
          <button onClick={() => addEmo(emoWaaaoo, setEmoWaaaoo, 0)}>🤯</button>
          <p>{emoWaaaoo}</p>
        </div>
      </div>
      <div className="emos">
        <div className="love">
          <button onClick={() => addEmo(emoLove, setEmoLove, 1)}>❤️</button>
          <p>{emoLove}</p>
        </div>
        <div className="like">
          <button onClick={() => addEmo(emoLike, setEmoLike, 1)}>👍</button>
          <p>{emoLike}</p>
        </div>
        <div className="laugh">
          <button onClick={() => addEmo(emoLaugh, setEmoLaugh, 1)}>🤣</button>
          <p>{emoLaugh}</p>
        </div>
        <div className="waaaoo">
          <button onClick={() => addEmo(emoWaaaoo, setEmoWaaaoo, 1)}>🤯</button>
          <p>{emoWaaaoo}</p>
        </div>
      </div>
    </>
  );
}
