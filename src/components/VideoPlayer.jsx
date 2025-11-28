import { useEffect, useRef, useState } from "react";

function Player({ src, isPlaying }) {
  const ref = useRef(null);

  /*
  if (isPlaying) {
    ref.current.play(); // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
  }
 */

  // Solution ?
  useEffect(() => {
    if (isPlaying) {
      ref.current.play(); // Calling these while rendering isn't allowed.
    } else {
      ref.current.pause(); // Also, this crashes.
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <Player
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
