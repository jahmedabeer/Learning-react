import { useState } from "react";

export default function SortButton({ sortOption, setSortOption }) {
    const [isOpen, setIsOpen] = useState(false);

    const sortOptions = [
        { value: "date-desc", label: "Date (Newest First)" },
        { value: "date-asc", label: "Date (Oldest First)" },
        { value: "name-asc", label: "Name (A-Z)" },
        { value: "name-desc", label: "Name (Z-A)" }
    ];

    return (
        <div className="relative flex flex-wrap gap-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4h18l-8 8v6l-4 4v-8z"
                    ></path>
                </svg>
                Sort by
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 z-10 w-48 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
                    {sortOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                setSortOption(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm transition first:rounded-t-2xl last:rounded-b-2xl hover:bg-neutral-800 ${
                                sortOption === option.value
                                    ? "text-blue-400 font-semibold"
                                    : "text-neutral-300"
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}