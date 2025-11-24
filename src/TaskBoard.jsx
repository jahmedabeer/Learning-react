import Columns from "./Board/Columns";

export default function TaskBoard() {
    const statuses = [
        { value: "todo", label: "To-do" },
        { value: "in-progress", label: "In Progress" },
        { value: "done", label: "Done" }
    ];

    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
            <div className="flex flex-col gap-6 xl:flex-row h-full">
                {statuses.map(s => <Columns key={s.value} status={s.value} label={s.label} />)}
            </div>
        </div>
    );
}

