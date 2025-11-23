# Learning react

Managing State

[Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

## Consolidate state logic with a reducer

- Move from setting state to dispatching actions
- Write a reducer function
- Use the reducer from your component
- The useReducer Hook takes two arguments:
  - A reducer function
  - An initial state
- And it returns:
  - A stateful value
  - A dispatch function (to “dispatch” user actions to the reducer)

## Comparing `useState` and `useReducer`

- Code size
- Readability
- Debugging
- Testing: A reducer is a pure function that doesn’t depend on your component.

### Writing reducers well

- Reducers must be pure (same inputs always result in the same output. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should update objects and arrays without mutations.)
- Each action describes a single user interaction, even if that leads to multiple changes in the data
