import { useContext } from 'react';
import { TaskContext } from '../context';

export default function ({ onClose, task }) {
    const { tasks, setTasks } = useContext(TaskContext);
    const isEditing = !!task

    const handleForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (isEditing) {
            const updateTasks = tasks.map(t =>
                t.id === task.id ? { ...t, ...data } : t
            )
            setTasks(updateTasks);
        } else {
            data.id = new Date().getTime();
            setTasks([...tasks, data])
        }
        onClose();
    }

    console.log(tasks);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg max-w-2xl w-full max-h-[95vh] overflow-y-auto">

                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Add Task</h1>
                        <p className="text-sm text-gray-500">Create a card for your board.</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>


                <form className="space-y-8 p-6 sm:p-8" onSubmit={handleForm}>

                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Task Title
                            </label>
                            <input
                                required
                                type="text"
                                id="title"
                                name="title"
                                placeholder="e.g. Wireframes"
                                defaultValue={task?.title}
                                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Task Subtitle / Description
                            </label>
                            <input
                                required
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Add context or acceptance criteria"
                                defaultValue={task?.description}
                                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="tag"
                                className="block text-sm font-medium text-gray-700"
                            >Tag</label
                            >
                            <select
                                required
                                id="tag"
                                name="tag"
                                defaultValue={task?.tag}
                                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                            >
                                <option value="">Select an option</option>
                                <option value="design">Design</option>
                                <option value="operations">Operations</option>
                                <option value="marketing">Marketing</option>
                                <option value="creative">Creative</option>
                                <option value="development">Development</option>
                                <option value="backend">Backend</option>
                                <option value="setup">Setup</option>
                                <option value="infrastructure">
                                    Infrastructure
                                </option>
                                <option value="documentation">
                                    Documentation
                                </option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                Due Date
                            </label>
                            <input
                                required
                                type="date"
                                id="date"
                                name="date"
                                defaultValue="2025-12-31" // added for testing purposes
                                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >Status</label
                            >
                            <select
                                required
                                id="status"
                                name="status"
                                defaultValue={task?.status}
                                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                            >
                                <option value="">Select an option</option>
                                <option value="todo">To-do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                    </div>


                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end border-t border-gray-200 pt-8">
                        <button type="button" className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}