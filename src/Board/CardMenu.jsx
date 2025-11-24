import { useContext } from "react";
import { TaskContext } from "../context";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";

export default function CardMenu({ task, onClose }) {
    const { tasks, setTasks } = useContext(TaskContext)

    const handleStatusChange = (newStatus) => {
        const updatedTasks = tasks.map(t =>
            t.id === task.id ? { ...t, status: newStatus } : t
        );
        setTasks(updatedTasks);
        onClose();
    }

    return (
        <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
            id="wireframes-menu"
            data-card-menu
        >
            <p
                className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
                Move to
            </p>
            {task.status !== "todo" && (
                <button type="button" className="w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => handleStatusChange("todo")}>
                    To-do
                </button>
            )}
            {task.status !== "in-progress" && (
                <button type="button" className="w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => handleStatusChange("in-progress")}>
                    In Progress
                </button>
            )}
            {task.status !== "done" && (
                <button type="button" className="w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => handleStatusChange("done")}>
                    Done
                </button>
            )}
            <div
                className="border-t border-gray-100 mt-2 pt-2 space-y-1"
            >
                <EditCard task={task} onClose={onClose} />
                <DeleteCard task={task} onClose={onClose} />
            </div>
        </div>
    );
}