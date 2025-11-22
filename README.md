# Learning react

Managing State

[Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)

## Info

- When React removes a component, it destroys its state
  ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_remove_component.png&w=640&q=75)
- React will keep the state around for as long as you render the same component at the same position in the tree.
- Same component at the same position preserves state (Remember that it’s the `position in the UI tree—not in the JSX markup`—that matters to React!)
- When you render a different component in the same position, it resets the state of its entire subtree.
- if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another.
