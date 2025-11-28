# Learning react

Escape Hatches

[Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

## Info

- Effects let you `run some code after rendering` so that you can synchronize your component with some system outside of React.
- Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.
- Effects `run at the end of a commit` after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).
  - By wrapping the dom update in an Effect, you let the react update the screen first. Then your effect runs.
