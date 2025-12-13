// spread operator
const fruits = ['Banana', 'Orange']
const lang = {
    name: 'Javascript',
    year: 1995,
    creator: 'Brendan Eich'
}

const result = [...fruits]
result.push('Guava')

console.log(fruits)
console.log(result)

const result1 = {
    ...lang,
    shortForm: 'Js'
}
console.log(lang)
console.log(result1)


// rest operator
function sum(text, ...rest){
    // console.log(arguments)
    // console.log(rest) // array

    const result = rest.reduce((sum, cur) => sum + cur, 0)
    console.log(`${text} ${result}`)
}
sum('Result:',5,6,8,9)