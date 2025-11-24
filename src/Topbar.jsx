import AddTask from "./Header/AddTask";
import SearchTasks from "./Header/SearchTasks";

export default function Topbar() {
    return (
        <div
            className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
        >
            <div
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
                <div>
                    <p
                        className="text-xs font-semibold text-blue-600 uppercase"
                    >
                        Board Overview
                    </p>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Workspace
                    </h1>
                </div>
                <div
                    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end w-full md:w-auto"
                >
                    <SearchTasks />
                    <AddTask />
                </div>
            </div>
        </div>
    );
}