# Bookmark Manager

[Live url](https://assignment-2-git-assignment-2-jaks-projects-037e5469.vercel.app/)

A modern, feature-rich bookmark management application built with React and Tailwind CSS.

## Features

### 🕐 Dynamic Greeting

- Time-based greeting message that changes throughout the day:
  - Morning: "Good Morning"
  - Noon: "Good Noon"
  - Evening: "Good Evening"
- Date display in a user-friendly format (e.g., Monday, Nov 10)

### 📝 Add New Bookmarks

- Add bookmarks with the following information:
  - Website URL
  - Category
  - Username
  - Password
- Smart website name extraction from URL
- Color picker for custom bookmark icons
- Generated favicon using the first two letters of the domain

### ✅ Form Validation

- **Field-level validation** with inline error messages
- Required field validation (no empty submissions)
- URL format validation for Website URL field
- Password minimum length validation (at least 6 characters)
- Clear button to reset the form

### 🔍 Search Functionality

- Real-time search through bookmarks
- Search filters by:
  - Website name
  - Website URL
- Automatic fallback to show all bookmarks when search is cleared
- User-friendly "Not Found" message when no results match

### 🔄 Sorting Options

- Interactive "Sort By" button with multiple options:
  - Sort by Date (Ascending/Descending)
  - Sort by Name (Ascending/Descending)
- Maintains current view while sorting

### 🎨 Bookmark Cards

- Grid layout for optimal viewing
- Each card displays:
  - Custom colored icon with domain initials
  - Website name
  - Category
  - Website URL
  - Username
  - Password (hidden by default)
- Password reveal/hide toggle functionality

### 🛡️ Security Features

- Passwords displayed as dots by default
- Individual reveal button for each bookmark
- Toggle between showing and hiding passwords

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No additional third-party libraries

## Project Structure

```
src/
├── components/          # React components organized by feature
│   ├── Header/         # Greeting and date display
│   ├── BookmarkForm/   # Form for adding new bookmarks
│   ├── BookmarkList/   # Grid display of bookmarks
│   ├── SearchBar/      # Search and sort functionality
│   └── BookmarkCard/   # Individual bookmark card
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

### Adding a Bookmark

1. Fill in the Website URL (required)
2. Select a category from the dropdown
3. Enter username (required)
4. Enter password (minimum 6 characters)
5. Choose a color for the bookmark icon
6. Click "Add Bookmark" to save

### Searching Bookmarks

- Type in the search field to filter bookmarks by name or URL
- Clear the search field to show all bookmarks

### Sorting Bookmarks

1. Click the "Sort By" button
2. Select your preferred sorting option:
   - Date (Newest First / Oldest First)
   - Name (A-Z / Z-A)

### Viewing Passwords

- Click the "Reveal" button on any bookmark card to show/hide the password

## Validation Rules

- **Website URL**: Must be a valid URL format
- **Category**: Required selection
- **Username**: Cannot be empty
- **Password**: Minimum 6 characters required
- All fields are mandatory before submission

## Development Guidelines

- Components are organized by feature for better maintainability
- No third-party libraries used (except React, Vite, and Tailwind CSS)
- Clean, readable code following React best practices
- Responsive design using Tailwind CSS utilities
