// object methods
const shortForm = 'Js'

const lang = {
    name: 'Javascript',
    year: 1995,
    creator: 'Brandan Erich',
    shortForm  // property shorthand - equivalent to shortForm: shortForm
}

console.log(Object.keys(lang)) // returns an array of the object's property names
console.log(Object.values(lang)) // returns an array of the object's property values
console.log(Object.entries(lang)) // return an array of key value pairs(array)

const dynamicKey = 'popularity' // Dynamic property assignment using bracket notation
lang[dynamicKey] = '100%';

console.log(lang)
