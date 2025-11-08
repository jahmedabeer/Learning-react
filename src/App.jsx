import Avatar from "./components/Avatar"
import PackingList from "./components/PackingList"

export default function App() {
  return (
    <>
      <Avatar
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        age={100}
      />
      <PackingList />
    </>
  )
}
