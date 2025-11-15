# Learning react

Adding Interactivity

[Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)

## Info

- Updating the same state multiple times before the next render using `Updater function`
  - It is an `uncommon use case`:
  - Updater functions must be pure and only return the result
- Naming conventions: It’s common to name the updater function argument by the first letters of the corresponding state variable
  - setEnabled(e => !e)
  - setFriendCount(fc => fc \* 2);
