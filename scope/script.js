// regular function
function hello(){
    console.log('helo world')

    // return undefined : default return
}
let msg = hello()
console.log(msg)
/*
    When you don't retun anything from a function by default it returns something / undefined
*/


// function expression
const newHello = function (){
    console.log('New helo world')
}

// named function expression
const newHello1 = function hello(){
    console.log('New helo world')
}

// arrow function
const newHello2 = (a, b) => a + b; // return a + b
const newHello3 = (a, b) => { // function body
    return {
        a: 5,
        b: 5
    }
}
const newHello4 = (a, b) => ({a: 5, b: 5})
console.log(newHello4()) // object

// anonymous function
function newHello5(){
    return () => { // anonymous
        console.log('New helo world')
    }
}
