import { useState } from "react";
import AddTaskModal from "../Header/AddTaskModal";

export default function EditCard({ task, onClose }) {
    const [Edit, setEdit] = useState(false)

    if (Edit) {
        return <AddTaskModal task={task} onClose={() => setEdit(false)} />;
    }

    return (
        <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
            onClick={() => setEdit(true)}
        >
            Edit Card
        </button>
    );
}