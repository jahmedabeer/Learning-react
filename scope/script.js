// Nullish Coalescing & Short Circuit Conditionals

// Nullish = Null / Undefined

let lang = null
let lang1 = "Python"
console.log(
    lang ?? "javascript",
    lang1 ?? "javascript"
) // if left side null / undefined return right side otherwise return left side

let lang2 = false
console.log(
    lang2 || "javascript",
    lang1 || "javascript"
) // if left side falsy(6) return right side otherwise return left side

console.log(
    lang2 && "javascript",
    lang1 && "javascript"
) // if left side truthy return right side otherwise return left side