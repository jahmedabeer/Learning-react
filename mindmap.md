# Bookmark Manager - Component Structure

## Component Tree

```
App
├── Header
│   ├── Greeting (time-based: Morning/Noon/Evening)
│   └── DateBadge (format: Monday, Nov 10)
│
├── BookmarkForm
│   ├── URL Input (validation: required, valid URL)
│   ├── ColorPicker (for favicon background)
│   ├── CategorySelect (dropdown)
│   ├── Username Input (validation: required)
│   ├── Password Input (validation: required, min 6 chars)
│   └── Buttons (Clear, Submit)
│
├── SearchBar (filter by name/URL)
├── SortButton (Date/Name, Asc/Desc)
│
├── BookmarkGrid
│   └── BookmarkCard (repeat for each)
│       ├── FaviconIcon (2 letters, custom color)
│       ├── Name (extracted from URL)
│       ├── Category
│       ├── URL
│       ├── Username
│       └── Password (hidden, toggle reveal)
│
└── Footer
```

## File Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── BookmarkForm.jsx
│   ├── SearchBar.jsx
│   ├── SortButton.jsx
│   ├── BookmarkCard.jsx
│   └── Footer.jsx
│
├── App.jsx
└── main.jsx
```

## Data Structure

```javascript
// Bookmark object
{
  id: "1",
  name: "Facebook",        // extract from URL
  url: "facebook.com",
  username: "user@email.com",
  password: "pass123",
  category: "Social",
  color: "#3b82f6",
  favicon: "Fb",          // first 2 letters
  createdAt: timestamp
}

// App state
- bookmarks: []
- searchQuery: ""
- sortBy: "date-desc"
```

## Key Features

1. **Dynamic Greeting** - Changes based on time of day
2. **Form Validation** - All fields required, URL format, password min 6 chars
3. **Search** - Filter by name and URL
4. **Sort** - By date or name (ascending/descending)
5. **Password Toggle** - Show/hide individual passwords
6. **Auto-generate** - Extract name from URL, create 2-letter favicon

## Categories

Social, Video, Design, Streaming, Productivity, Entertainment, Shopping, Music
