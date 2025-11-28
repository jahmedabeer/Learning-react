# Learning react

Escape Hatches

[Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

## Info

- Effects let you `run some code after rendering` so that you can synchronize your component with some system outside of React.
- Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.
- Effects `run at the end of a commit` after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).
  - By wrapping the dom update in an Effect, you let the react update the screen first. Then your effect runs.

### Specify the Effect dependencies

- By default, Effects run after every render.
- You can tell React to skip unnecessarily re-running the Effect by specifying an array `[]` of dependencies
- React will only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render.

  ```
  useEffect(() => {
  // This runs after every render
  });

  useEffect(() => {
  // This runs only on mount (when the component appears)
  }, []);

  useEffect(() => {
  // This runs on mount _and also_ if either a or b have changed since the last render
  }, [a, b]);
  ```

### Add cleanup if needed

- React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed)
