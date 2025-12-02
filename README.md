# Learning react

Escape Hatches

[Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)

## Choosing between event handlers and Effects

- Event handlers run `in response to specific interactions`
- Effects run whenever `synchronization is needed`

## Reactive values and reactive logic

- Logic inside event handlers is not reactive. It will not run again unless the user performs the same interaction (e.g. a click) again
- Logic inside Effects is reactive. If your Effect reads a reactive value, you have to specify it as a dependency. Then, if a re-render causes that value to change, React will re-run your Effect’s logic with the new value.

## Extracting non-reactive logic out of Effects

- Use a special Hook called useEffectEvent to extract this non-reactive logic out of your Effect
- Effect Events are not reactive and must be omitted from dependencies.
