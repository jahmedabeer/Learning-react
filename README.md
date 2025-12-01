# Learning react

Escape Hatches

[Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)

## Info

- How React re-synchronizes your Effect

  - Thinking from the Effect’s perspective

    - ChatRoom component’s perspective

    ```
    ChatRoom mounted with roomId set to "general"
    ChatRoom updated with roomId set to "travel"
    ChatRoom updated with roomId set to "music"
    ChatRoom unmounted
    ```

    - Effect

    ```
    Your Effect connected to the "general" room
    Your Effect disconnected from the "general" room and connected to the "travel" room
    Your Effect disconnected from the "travel" room and connected to the "music" room
    Your Effect disconnected from the "music" room
    ```

- Each Effect represents a separate synchronization process
