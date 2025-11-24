import { useState } from "react";
import AddTaskModal from "./AddTaskModal";


export default function AddTask() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            {showModal && <AddTaskModal onClose={handleShowModal} />}
            <button
                className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={handleShowModal}
            >
                + Add Task
            </button>
        </>
    );
}