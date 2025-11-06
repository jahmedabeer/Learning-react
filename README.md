# Learning react

[Importing and exporting components](https://react.dev/learn/importing-and-exporting-components)

#### Default export:
```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

#### Default import:
```
import Profile from './components/Profile'
import Anyname from './components/Profile'
```
---

#### Named export:
```
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

#### Named import:
```
import { Profile } from './components/Profile'
```

## Info
- Best practice: `Stand alone component` (can be used anywhere without error / problem!)
- 2 ways we can export: `Default export & Named export`
- A single file can contain multiple components and multiple exports. However, there can be `only one default export`. All `others must be named exports`.