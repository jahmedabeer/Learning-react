# Learning react

Adding Interactivity

[Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)

## Info

- When to use a single vs multiple state variables
- What to avoid when organizing state
- if some two state variables always change together, it might be a good idea to unify them into a single state variable.
- Another case where you’ll group data into an object or an array is when you don’t know how many pieces of state you’ll need.
- Derived state: Any value you calculate from existing state or props

  ```
    const [price, setPrice] = useState(100);
    const tax = price * 0.1; // this is derived state
  ```

-
