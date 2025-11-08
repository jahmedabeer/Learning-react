import Container from "./components/Container"
import Lines from "./components/Lines"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div
      className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center"
    >
      <div
        className="relative flex flex-col justify-start items-center w-full"
      >
        {/* <!-- Main container with proper margins --> */}
        <div
          className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen"
        >
          <Lines side="left" />
          <Lines side="right" />
          <Navigation />
          <Container />
        </div>
      </div>
    </div>
  )
}

export default App
