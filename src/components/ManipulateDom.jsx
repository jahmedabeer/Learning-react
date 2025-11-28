import { useRef } from "react";

export default function ManipulateDom() {
  // To access a DOM node managed by React
  const ref = useRef(null); // {current: null}

  const handleClick = () => {
    console.log(ref.current); // reference div
    ref.current.textContent = "Helo react";
  };

  return (
    <>
      <div ref={ref}>helo</div>
      <button onClick={handleClick}>Click me please!!!</button>
    </>
  );
}
