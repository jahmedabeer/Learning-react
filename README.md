# Learning react

Managing State

[Lifting state up](https://react.dev/learn/sharing-state-between-components)

## Info - (Sharing State Between Components)

- share state between components by lifting it up
- controlled and uncontrolled components

### Uncontrolled components

- Initially, each Panel’s isActive state is false, so they both appear collapsed
  ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_child.png&w=640&q=75)
- Clicking either `Panel's` button will only update that `Panel's isActive` state alone
  ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_child_clicked.png&w=640&q=75)

### Controlled components

- Initially, each Panel’s isActive state is false, so they both appear collapsed
  ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_parent.png&w=640&q=75)
- Clicking either `Panel's` button will only update that `Panel's isActive` state alone
  ![](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_parent_clicked.png&w=640&q=75)
