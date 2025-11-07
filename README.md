# Learning react

[React markup with JSX - static](https://react.dev/learn/writing-markup-with-jsx)


## Info
- To return multiple elements from a component, wrap them with a single parent tag.
- JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array.
- camelCase all most of the things!
- For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.


[React markup with JSX - dynamic](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

```
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```
## info
- Where to use `curly braces` ? 
    - As text directly inside a JSX tag `:` <span>{name}'s To Do List</span>
    - As attributes immediately following the = sign `:` src={avatar}
- Where to use `double curlies` ?
    - CSS and other objects
        - Inline css (Inline style properties are written in camelCase)
        ```
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
        ```
        - To pass a JS object in JSX, you must wrap the object in another pair of curly braces `:` person={{ name: "Hedy Lamarr", inventions: 5 }}