import { useState } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import { initialTasks } from './data/data.js';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev.id : current.id)

    return maxId + 1;
  }

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      else {
        return t;
      }
    })
    setTasks(nextTasks);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
