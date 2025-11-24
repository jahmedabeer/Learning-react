import { useContext } from "react";
import { TaskContext } from "../context";

export default function DeleteCard({ task, onClose }) {
    const { tasks, setTasks } = useContext(TaskContext)

    const handleDelete = () => {
        const updatedTasks = tasks.filter(t => t.id !== task.id)
        setTasks(updatedTasks);
        onClose();
    }

    return (
        <button
            type="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            onClick={handleDelete}
        >
            Delete Card
        </button>
    );
}