# Learning react

Escape Hatches

[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

## There are two common cases in which you don’t need Effects

- don’t need Effects to transform data for rendering
- don’t need Effects to handle user events
- To fix the race condition, you need to add a cleanup function to ignore stale responses
