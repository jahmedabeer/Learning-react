# Learning react

Adding Interactivity

[Render & Commit: How render works!](https://react.dev/learn/render-and-commit)

## Info

- Before your components are displayed on screen, they `must be rendered by React`.
- Trigger a render (There are two reasons for a component to render)
  - Initial render. (When your app starts, you need to trigger the initial render.)
  - The component’s (or one of its ancestors’) state has been updated.
- After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.
  - `On initial render`, React will `call the root component`.
  - For subsequent renders, React will call the function component `whose state update` triggered the render.
  - `This process is recursive`: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on.
  - If the parent component renders, the child component inside it will render too.( Changes happen in VDOM )
- Any screen update in a React app happens in three steps:
  - Trigger
  - Render
  - Commit
