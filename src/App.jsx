import { useReducer } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import { initialTasks } from './data/data.js';
import taskReducer from './reducers/taskReducer.js';

export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev.id : current.id)

    return maxId + 1;
  }

  function handleAddTask(text) {
    dispatch({
      type: "added",
      text: text,
      id: getNextId(tasks)
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      {console.log(tasks)}
    </>
  );
}
