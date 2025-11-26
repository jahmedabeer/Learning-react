# Learning react

Escape Hatches

[Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)

## Info

- When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.
- You shouldn’t read (or write) the current value during rendering.
- Although both useState and useRef are provided by React, in principle useRef could be implemented on top of useState
  ```
  // Inside of React
  function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
  }
  ```

### When to use refs

- Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs
