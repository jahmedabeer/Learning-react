import { useContext } from "react";
import { TaskContext } from "../context";
import TaskCard from "./TaskCard";

export default function Columns({ status, sortOrder }) {
    const { tasks, selectedTags, searchQuery } = useContext(TaskContext)
    const selectedTag = selectedTags[status];

    let filteredTasksByStatus = tasks.filter(task =>
        task.status === status &&
        (!selectedTag || task.tag === selectedTag) &&
        (!searchQuery || task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    // Sort by task.date (due date)
    if (sortOrder === "newest") {
        filteredTasksByStatus = filteredTasksByStatus.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "oldest") {
        filteredTasksByStatus = filteredTasksByStatus.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return (
        <div
            className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
        >
            {filteredTasksByStatus.length === 0 ? (
                <p className="text-center text-gray-500 text-sm py-8">Not Found</p>
            ) : (
                filteredTasksByStatus.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))
            )}
        </div>
    );
}