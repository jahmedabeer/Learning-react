# Learning react

Escape Hatches

[Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

- React component names must start with a capital letter, like StatusBar
- Hook names must start with use followed by a capital letter, like useOnlineStatus

## Custom Hooks let you share stateful logic, not state itself

- When you turned the network on and off, both components updated together. However, it’s wrong to think that a single isOnline state variable is shared between them.
