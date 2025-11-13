# Learning react

Adding Interactivity

[State: A Component's Memory](https://react.dev/learn/state-a-components-memory)

## Info

- To `update a component with new data`, two things need to happen:
  - Retain the data between renders.
  - Trigger React to render the component with new data (re-rendering)
- The `useState Hook` provides those two things:
  - A state variable to retain the data between renders.
  - A state setter function to update the variable and trigger React to render the component again.
  - State is isolated and private
