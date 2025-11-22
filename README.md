# Learning react

Managing State

[Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

## Info

- The problem with passing props (passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree)
  - Prop drilling (occurs when data is passed through multiple layers of components, even when only the deepest component needs it)
    ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.png&w=640&q=75)
- Context: an alternative to passing props
  - Context lets a parent component provide data to the entire tree below it.
