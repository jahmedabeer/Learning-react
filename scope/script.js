// Primitive (string, number, boolean)
let x = 5;
let y = 6;
x = y; // x = 6(y)
y = 7;

console.log(x,y)

// reference (array, object)
let a = ['Js', 'Python']
let b = ['Html', 'Css'];
b = a; // b = ['Js', 'Python'](a)
a.push('Go')

console.log(a)
console.log(b) // we didn't push 'Go" to b but still we see it

