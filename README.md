# Learning react

[Component](https://react.dev/learn/your-first-component)

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

## Info
- Export the component (_`export default` prefix is a standard JavaScript syntax)
- React components are regular JavaScript functions, but their names `must start with a capital letter` or they won’t work!
- If markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses. `Without parentheses, any code on the lines after return will be ignored`!
- The markup written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX.