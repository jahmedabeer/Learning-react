import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import TasksProvider from './contexts/TaskContext.jsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
