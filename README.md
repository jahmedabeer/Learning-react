# Learning react

Adding Interactivity

[Declarative vs Imperative UI](https://react.dev/learn/reacting-to-input-with-state)

## Info

- Declarative : Declare what you want to show, and React figures out how to update the UI
  - In React, you don’t directly manipulate the UI
  - Think of getting into a taxi and telling the driver where you want to go
- Imperative : In imperative programming, you have to `write the exact instructions to manipulate the UI` depending on what just happened.
  - 'command' / 'telling' the computer how to update the UI
  - Think of getting into a taxi and telling the driver exactly where to turn.

## Thinking about UI declaratively

How to think in React

### 1. Identify your component’s different visual states

First, you need to `visualize all the different "states"` of the UI the user might see:

![ok](https://image.prntscr.com/image/CdJpC7bSRSWKVcIS5QJU_Q.jpg)

- Empty: Form has a disabled “Submit” button.
- Typing: Form has an enabled “Submit” button.
- Submitting: Form is completely disabled. Spinner is shown.
- Success: “Thank you” message is shown instead of a form.
- Error: Same as Typing state, but with an extra error message.

### 2. Determine what triggers those state changes

![ok](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.png&w=750&q=75)

- Human inputs, like clicking a button, typing in a field, navigating a link.
- Computer inputs, like a network response arriving, a timeout completing, an image loading.

### 3. Represent the state in memory with useState

- Simplicity is key: each piece of state is a “moving piece”, and you want as few “moving pieces” as possible. More complexity leads to more bugs!
- Start with the state that absolutely must be there.

### 4. Remove any non-essential state variables

- Does this state cause a paradox?
- Is the same information available in another state variable already?
- Can you get the same information from the inverse of another state variable?

### 5. Connect the event handlers to set state
