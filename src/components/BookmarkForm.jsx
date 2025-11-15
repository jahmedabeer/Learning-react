import { useState } from 'react';

export default function BookmarkForm({ bookmarks, setBookmarks }) {
    const defaultColor = "#3b82f6"
    const [url, setUrl] = useState("");
    const [urlError, setUrlError] = useState("");
    const [category, setCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [color, setColor] = useState(defaultColor);
    const [user, setUser] = useState("");
    const [userError, setUserError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // validate url
    const validateUrl = (val) => {
        const urlVal = val.trim();
        if (!urlVal) {
            setUrlError('Url is required');
            return false;
        }

        if (!urlVal.startsWith('https://')) {
            setUrlError('URL must start with https://');
            return false;
        }

        try {
            new URL(urlVal);
            setUrlError("");
            return true;
        } catch {
            setUrlError("Enter a valid URL");
            return false;
        }
    }

    // validate category
    const validateCategory = (val) => {
        if (!val || val === "") {
            setCategoryError("Select a category");
            return false;
        }
        setCategoryError("");
        return true;
    };

    // validate user
    const validateUser = (val) => {
        const userVal = val.trim();
        if (!userVal) {
            setUserError('Username is required');
            return false;
        }
        setUserError("");
        return true;
    }

    // validate password
    const validatePassword = (val) => {
        const passwordVal = val.trim();
        if (!passwordVal) {
            setPasswordError('Password is required');
            return false;
        }

        if (passwordVal.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return false;
        }

        setPasswordError("");
        return true;
    }

    // Extract domain name from URL
    const extractWebsiteName = (url) => {
        try {
            const urlObj = new URL(url);
            const hostname = urlObj.hostname;
            // Remove 'www.' if present
            const domain = hostname.replace('www.', '');
            // Get the main part (e.g., 'facebook' from 'facebook.com')
            const name = domain.split('.')[0];
            // Capitalize first letter
            return name.charAt(0).toUpperCase() + name.slice(1);
        } catch {
            return '';
        }
    };

    // Get initials for favicon
    const getInitials = (websiteName) => {
        return websiteName.substring(0, 2).toUpperCase();
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const isUrlValid = validateUrl(url);
        if (isUrlValid) console.log("Valid URL:", url);

        const isCategoryValid = validateCategory(category);
        if (isCategoryValid) console.log("Valid Category:", category);

        console.log("Selected Color:", color);

        const isUserNameValid = validateUser(user);
        if (isUserNameValid) console.log("Username:", user);

        const isPasswordValid = validatePassword(password);
        if (isPasswordValid) console.log("Password:", password);

        // Only proceed if ALL fields are valid
        if (isUrlValid && isCategoryValid && isUserNameValid && isPasswordValid) {
            const websiteName = extractWebsiteName(url);
            const domain = getInitials(websiteName);

            const newBookmark = {
                id: Date.now(),
                url,
                category,
                username: user,
                password,
                color,
                websiteName,
                domain
            };

            setBookmarks([...bookmarks, newBookmark]);  // Add to array

            // Clear form after successful submission
            handleReset();

            console.log("Bookmark created:", newBookmark);
        }
    };

    // reset form
    const handleReset = () => {
        setUrl("");
        setUrlError("");
        setCategory("");
        setCategoryError("");
        setColor(defaultColor);
        setUser("");
        setUserError("");
        setPassword("");
        setPasswordError("");
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 px-4">
            <form
                onSubmit={handleSubmit}
                onReset={handleReset}
                className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur"
            >
                <div className="mb-8 flex flex-col gap-3">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400"
                    >
                        New bookmark
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Store website credentials safely
                    </h2>
                    <p className="text-sm text-neutral-400">
                        Fill the details below. Your brand color helps us render
                        a matching favicon.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Website URL
                            </span>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={url}
                                onChange={e => {
                                    setUrl(e.target.value)
                                }}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            {urlError && (<span className="text-xs text-red-400">{urlError}</span>)}
                            <span className="text-xs text-neutral-500">Include https:// for best results.</span>
                        </label>

                        <div
                            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                                    >
                                        Favicon color
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Select the accent color we should
                                        render.
                                    </p>
                                </div>
                                <input
                                    type="color"
                                    value={color}
                                    onChange={e => {
                                        setColor(e.target.value)
                                    }}
                                    className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                                />
                            </div>
                            <div
                                className="mt-5 flex items-center gap-3 text-xs text-neutral-500"
                            >
                                <span
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400"
                                >
                                    Hex
                                </span>
                                <span>Matches any brand primary color.</span>
                            </div>
                        </div>


                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Category
                            </span>
                            <select
                                value={category}
                                onChange={e => {
                                    setCategory(e.target.value)
                                }}
                                className="w-full bg-transparent text-base text-white outline-none"
                            >
                                <option value="" className="bg-neutral-900 text-white">
                                    Select category
                                </option>
                                <option value="social" className="bg-neutral-900 text-white">
                                    Social
                                </option>
                                <option value="video" className="bg-neutral-900 text-white">
                                    Video
                                </option>
                                <option value="design" className="bg-neutral-900 text-white">
                                    Design
                                </option>
                                <option value="streaming" className="bg-neutral-900 text-white">
                                    Streaming
                                </option>
                                <option value="productivity" className="bg-neutral-900 text-white">
                                    Productivity
                                </option>
                                <option value="entertainment" className="bg-neutral-900 text-white">
                                    Entertainment
                                </option>
                                <option value="shopping" className="bg-neutral-900 text-white">
                                    Shopping
                                </option>
                                <option value="music" className="bg-neutral-900 text-white">
                                    Music
                                </option>
                            </select>
                            {categoryError && (<span className="text-xs text-red-400">{categoryError}</span>)}
                            <span className="text-xs text-neutral-500">
                                Helps you filter quicker later.
                            </span>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Username
                            </span>
                            <input
                                type="text"
                                placeholder="Enter username"
                                value={user}
                                onChange={e => {
                                    setUser(e.target.value)
                                }}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            {userError && (<span className="text-xs text-red-400">{userError}</span>)}
                            <span className="text-xs text-neutral-500">Use workspace or personal handle.</span>
                        </label>


                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Password
                            </span>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value)
                                }}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            {passwordError && (<span className="text-xs text-red-400">{passwordError}</span>)}
                            <span className="text-xs text-neutral-500">Choose at least 6 characters.</span>
                        </label>
                    </div>
                </div>

                <div
                    className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                    <div className="text-xs text-neutral-500">
                        By submitting you confirm the entry is safe to store.
                    </div>
                    <div className="flex flex-1 justify-end gap-3">
                        <button
                            type="reset"
                            className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
                        >
                            Add Bookmark
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}