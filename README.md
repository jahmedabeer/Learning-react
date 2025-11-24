# Task Manager Application

A modern, feature-rich task management application built with React, Vite, and Tailwind CSS. Organize your tasks efficiently across three status columns: To-Do, In Progress, and Done.

## Project Overview

This Task Manager allows users to create, manage, and organize tasks with multiple filtering and sorting options. Tasks can be moved between different status columns, edited, deleted, and searched in real-time. The application uses React Context API and useReducer for robust state management.

- Mind map: https://gitmind.com/app/docs/frycdvv8

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Features

### ✅ Core Task Management

- **Create Tasks**: Add new tasks through a modal form
- **View Tasks**: Display tasks organized in three status columns: To-Do, In Progress, and Done
- **Task Details**: Each task displays:
  - Title and description
  - Status-based column placement
  - Tags with color-coded display
  - Due date

### ✅ Task Organization

- **Status-Based Display**: Tasks automatically appear in their designated status column

  - Select status when creating a task
  - Task will render in the corresponding column
  - Example: Task with "In Progress" status appears in the In Progress column

- **Move Between Columns**: Use the 3-dot menu on each card to move tasks between columns
  - Click "Move To" to see available destination columns
  - Task status updates immediately upon move
  - Card relocates to the new column instantly

### ✅ Filtering by Tags

- **Column-Specific Filtering**: Filter cards within each column by tag

  - Click the "Filter" button on any column
  - Select a tag to display only cards with that tag
  - Shows "Not Found" if no matches exist
  - All tags from the form are available in the filter list (not limited to 3)
  - Clear filter to see all cards again

- **Available Tags**: Design, Development, Bug Fix, Documentation, Testing, and more (based on form options)

### ✅ Sorting by Date

- **Sort by Due Date**: Click the "Sort" button on any column
  - Sort tasks by their due dates
  - Supports ascending and descending order
  - Applies to the current column only

### ✅ Search Functionality

- **Global Task Search**: Use the search field in the navigation bar
  - Search tasks by title/keyword
  - Displays only matching cards across all columns
  - Shows "Not Found" if no matches exist
  - Clear the search to display all tasks again
  - Real-time search results

### ✅ Card Actions (3-Dot Menu)

Each task card has a 3-dot menu with the following options:

- **Edit**: Convert the form to edit mode and update task details

  - Pre-populate form with current task data
  - Update state with changes
  - Modal closes after submission

- **Delete**: Remove a task with confirmation dialog

  - Shows confirmation message before deletion
  - Prevents accidental deletion
  - Card is immediately removed from the board

- **Move To**: Move the card to another column
  - Shows only available destination columns
  - Example: From "To-Do" column, shows "In Progress" and "Done"
  - Task status updates upon move

### ✅ Add Task Modal

- **Navigation Bar Button**: Click "Add Task" in the navbar
- **Modal Presentation**: Opens in a modal/dialog without page reload
- **Form Fields**:
  - Task title (required)
  - Description (optional)
  - Status selection (To-Do, In Progress, Done)
  - Tags (multiple selection)
  - Due date (date picker)
- **Form Validation**: Validates all required fields
- **Auto-Close**: Modal closes after successful submission
- **Data Display**: New task card appears in the corresponding column

### ✅ Tag Color Coding

- **Color-Coded Display**: Each tag has a predefined color
- **No User Selection**: Colors are set in code, not user-configurable
- **Consistent Display**: Same tag always displays with the same color
- **Example Tags with Colors**:
  - Design - Blue
  - Development - Green
  - Bug Fix - Red
  - Documentation - Yellow
  - Testing - Purple

## State Management

### Context API & useReducer Implementation

The application uses React Context API combined with useReducer for centralized state management:

- **Centralized Store**: All task data managed in a single context
- **Reducer Actions**:

  - `ADD_TASK` - Add a new task
  - `UPDATE_TASK` - Update existing task details
  - `DELETE_TASK` - Remove a task with confirmation
  - `MOVE_TASK` - Move task to another column
  - `FILTER_TASKS` - Filter tasks by tag per column
  - `SORT_TASKS` - Sort tasks by date per column
  - `SEARCH_TASKS` - Search tasks globally
  - `CLEAR_FILTERS` - Reset all filters

## Form Validation & Error Handling

- **Required Field Validation**: Title is mandatory
- **Error Messages**: Clear, user-friendly error messages for validation failures
- **Loading State**: Shows loading indicator while processing
- **Not Found State**: Displays "Not Found" message when:
  - No tasks match the search query
  - No tasks match the applied filter
  - No tasks exist in a column

## UX Best Practices

- **Search Field**: Clears automatically, shows all tasks when empty
- **Form Reset**: Form fields reset after successful submission
- **Confirmation Dialogs**: Deletion requires user confirmation
- **Immediate Feedback**: UI updates instantly after actions
- **Responsive Design**: Works seamlessly on all screen sizes
- **No Unnecessary Logs**: Console logs removed except for error handling
