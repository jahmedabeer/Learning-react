import { useState } from 'react';

/*
  Notice that number only increments once per click!
  
  Here is what this button’s click handler tells React to do:

  1. setNumber(number + 1): number is 0 so setNumber(0 + 1).
    - React prepares to change number to 1 on the next render.

  2. setNumber(number + 1): number is 0 so setNumber(0 + 1).
    - React prepares to change number to 1 on the next render.

  3. setNumber(number + 1): number is 0 so setNumber(0 + 1).
    - React prepares to change number to 1 on the next render.

  Visualize this by mentally substituting state variables with their values in your code
  `
    <button onClick={() => {
      setNumber(0 + 1);
      setNumber(0 + 1);
      setNumber(0 + 1);
    }}>+3</button>
  `
*/

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [numberOne, setNumberOne] = useState(0);

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </div>
      <div>
        <h1>{numberOne}</h1>
        <button onClick={() => {
          setNumberOne(numberOne + 5); // 5 -> 10 -> 15
          alert(numberOne); // 0 -> 5 -> 10
        }}>+5</button>
      </div>
    </>
  )
}
