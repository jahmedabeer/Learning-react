# Learning react

[Keeping components pure](https://react.dev/learn/keeping-components-pure)

- React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering
- Given the same inputs, a pure function should always return the same result.
- React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs
- How pure function improve performance? - All components whose input hasn’t changed will not re-render.
