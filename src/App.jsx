import { useReducer } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import { TaskContext, TaskDispatchContext } from './contexts/TaskContext.js';
import { initialTasks } from './data/data.js';
import taskReducer from './reducers/taskReducer.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  return (
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
        {console.log(tasks)}
      </TaskDispatchContext>
    </TaskContext>
  );
}
