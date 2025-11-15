import { useState } from 'react';
import BookmarkCard from "./BookmarkCard";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";

export default function Main({ bookmarks }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("date-desc");

    // Filter bookmarks by search term
    const filteredBookmarks = bookmarks.filter((bookmark) => {
        const search = searchTerm.toLowerCase();
        return (
            bookmark.websiteName.toLowerCase().includes(search) ||
            bookmark.url.toLowerCase().includes(search)
        );
    });

    // Sort filtered bookmarks
    const sortedBookmarks = [...filteredBookmarks].sort((a, b) => {
        switch (sortOption) {
            case "date-desc":  // Newest First
                return b.id - a.id;
            case "date-asc":   // Oldest First
                return a.id - b.id;
            case "name-asc":   // A-Z
                return a.websiteName.localeCompare(b.websiteName);
            case "name-desc":  // Z-A
                return b.websiteName.localeCompare(a.websiteName);
            default:
                return 0;
        }
    });


    return (
        <main className="p-8">
            <div className="max-w-7xl mx-auto space-y-10 px-4">
                {/* <!-- Search, Sort, and Filter Buttons --> */}
                <section
                    className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur"
                >
                    <div
                        className="flex flex-col gap-4 lg:flex-row lg:items-center"
                    >
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <SortButton sortOption={sortOption} setSortOption={setSortOption} />
                    </div>
                </section>

                {/* <!-- Password Cards Grid --> */}
                <div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {sortedBookmarks.length > 0 ? (
                        sortedBookmarks.map(bookmark => (
                            <BookmarkCard
                                key={bookmark.id}
                                domain={bookmark.domain}
                                webName={bookmark.websiteName}
                                webUrl={bookmark.url}
                                category={bookmark.category}
                                userName={bookmark.username}
                                password={bookmark.password}
                                color={bookmark.color}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-neutral-400">
                                {searchTerm ? "No bookmarks found matching your search" : "No bookmarks yet"}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}