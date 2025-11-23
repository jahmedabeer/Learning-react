/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import { initialTasks } from '../data/data.js';
import taskReducer from '../reducers/taskReducer.js';

export const TaskContext = createContext(null)
export const TaskDispatchContext = createContext(null)

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    console.log(tasks)

    return (
        <TaskContext value={tasks}>
            <TaskDispatchContext value={dispatch}>
                {children}
            </TaskDispatchContext>
        </TaskContext>
    )
}

export function useTask() {
    return useContext(TaskContext)
}

export function useTasksDispatch() {
    return useContext(TaskDispatchContext)
}