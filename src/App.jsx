import { useState } from 'react';
import Counter from "./components/Counter";

export default function List() {
  // When you tick “Render the second counter”, a second Counter and its state are initialized from scratch (score = 0) and added to the DOM.

  const [showB, setShowB] = useState(true);

  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}
