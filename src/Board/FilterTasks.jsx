import { useContext } from "react";
import { TaskContext } from "../context";

export default function FilterTasks({ status }) {
    const { selectedTags, setSelectedTags } = useContext(TaskContext);
    const currentTag = selectedTags[status];

    // All available tags from the form
    const allTags = [
        "design",
        "operations",
        "marketing",
        "creative",
        "development",
        "backend",
        "setup",
        "infrastructure",
        "documentation"
    ];

    const handleTagSelect = (tag) => {
        setSelectedTags({ ...selectedTags, [status]: tag });
    };

    const clearFilter = () => {
        setSelectedTags({ ...selectedTags, [status]: null });
    };

    return (
        <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
            id="todo-filter-menu"
            data-menu
        >
            <p
                className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
                Filter by tag
            </p>
            {currentTag && (
                <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-blue-600 font-medium text-xs"
                    onClick={clearFilter}
                >
                    Clear Filter
                </button>
            )}
            {allTags.map(tag => (
                <button
                    key={tag}
                    type="button"
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 capitalize ${currentTag === tag ? "bg-blue-50 text-blue-600 font-medium" : ""}`}
                    onClick={() => handleTagSelect(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}