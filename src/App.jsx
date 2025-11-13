import { useState } from 'react';
import { sculptureList } from './data.js';


function NotReactiveWay() {
  /*
    The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:

      `Local variables don’t persist between renders`. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
      `Changes to local variables won’t trigger renders`. React doesn’t realize it needs to render the component again with the new data.
  */
  let index = 0;

  function handleClick() {
    index = index + 1;
    console.log(index)
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

function ReactiveWay() {
  /*
    To update a component with new data, two things need to happen:

      `Retain the data between renders`.
      `Trigger React to render the component with new data` (re-rendering).
  */

  const [index, setIndex] = useState(0);

  function handleClick() {
    index + 1 < sculptureList.length && setIndex(index + 1)
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

export default function Gallery() {

  return (
    <>
      {/* <NotReactiveWay /> */}
      <ReactiveWay />
      <hr />
      {/* State is isolated and private */}
      <ReactiveWay />
    </>
  );
}
