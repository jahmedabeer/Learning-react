import PassingEventHandlersAsProps from "./components/Eventhandler";

export default function Button() {

  function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    )
  }

  function handleClick() {
    alert("Don't bother!")
  }

  return (
    <>
      <button onClick={handleClick}>
        I don't do anything
      </button>
      <button onClick={() => {
        console.log('Hello dolly!')
      }}>
        I do something
      </button>
      <AlertButton message="Uploading">
        Upload Image
      </AlertButton>
      <PassingEventHandlersAsProps />
    </>
  );
}
