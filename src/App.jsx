import { useState } from "react";

import Example1 from "./components/Example1.jsx";
import Example2 from "./components/Example2.jsx";
import Example3 from "./components/Example3.jsx";
import { items1, items2 } from './data/itemsData';

export default function App() {
  const [userId, setUserId] = useState(1) // Example 2
  const [items, setItems] = useState(items1); // Example 3

  return (
    <>
      {/* Updating state based on props or state */}
      <Example1 />

      <hr />
      <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>Switch to Profile No. {userId === 1 ? 2 : 1}</button>
        {/* //  Resetting all state when a prop changes */}
        <Example2 key={userId} userId={userId} />
      </div>
      <hr />

      {/* Adjusting some state when a prop changes */}
      <div>
        <button onClick={() => setItems(items2)}>
          Switch to Items2
        </button>{" "}
        <button onClick={() => setItems(items1)}>Switch to Items1</button>
        <Example3 items={items} />
      </div>
    </>
  );
}
