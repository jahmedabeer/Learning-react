import { useState } from "react";
import { TaskContext } from "./context";
import Sidebar from "./Sidebar";
import TaskBoard from "./TaskBoard";
import Topbar from "./Topbar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTags, setSelectedTags] = useState({ todo: null, "in-progress": null, done: null });
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <TaskContext.Provider value={{ tasks, setTasks, selectedTags, setSelectedTags, searchQuery, setSearchQuery }}>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 flex flex-col min-h-0">
          <Topbar />
          <TaskBoard />
        </main>
      </div>
    </TaskContext.Provider>
  )
}

export default App
