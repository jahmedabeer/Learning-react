export default function SortTasks({ sortOrder, setSortOrder }) {
    return (
        <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
            id="todo-sort-menu"
            data-menu
        >
            <p
                className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
                Sort by date
            </p>
            {sortOrder && (
                <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-blue-600 font-medium text-xs"
                    onClick={() => setSortOrder(null)}
                >
                    Clear Sort
                </button>
            )}
            <button
                type="button"
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${sortOrder === "newest" ? "bg-blue-50 text-blue-600 font-medium" : ""}`}
                onClick={() => setSortOrder("newest")}
            >
                Newest first
            </button>
            <button
                type="button"
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${sortOrder === "oldest" ? "bg-blue-50 text-blue-600 font-medium" : ""}`}
                onClick={() => setSortOrder("oldest")}
            >
                Oldest first
            </button>
        </div>
    );
}