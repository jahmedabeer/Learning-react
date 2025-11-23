import { useContext, useState } from 'react';
import { TaskContext, TaskDispatchContext } from '../contexts/TaskContext';
import { getNextId } from '../utils/getNextId';

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(TaskDispatchContext)
    const tasks = useContext(TaskContext)
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText(''); // clear form
                    dispatch({
                        type: "added",
                        text: text,
                        id: getNextId(tasks)
                    })
                }}>
                Add
            </button>
        </>
    );
}
