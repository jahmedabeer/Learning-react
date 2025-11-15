import { useState } from "react"
import BookmarkForm from "./components/BookmarkForm"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [bookmarks, setBookmarks] = useState([])

  return (
    <>
      <Header />
      <BookmarkForm
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
      <Main bookmarks={bookmarks} />
      <Footer />
    </>
  )
}

export default App
