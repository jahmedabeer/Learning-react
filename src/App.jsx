import { useState } from 'react';
import Counter from './components/Counter';

export default function Scoreboard() {
  /* Resetting state at the same position

      There are two ways to reset state when switching between them
        - Render components in different positions
        - Give each component an explicit identity with `key`
  */
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {/* default behaviour
      {isPlayerA ? (
        <Counter person="Taylor" />
      ) : (
        <Counter person="Sarah" />
      )}
      */}
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}

      {/* Resetting state with a key */}

      {isPlayerA ? (
        <Counter key="taylor" person="Taylor" />
      ) : (
        <Counter key="sarah" person="Sarah" />
      )}

      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
