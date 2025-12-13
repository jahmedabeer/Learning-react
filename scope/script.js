// Array methods

// find: returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "Guava", quantity: 9 },
];
// const result = inventory.find( item => item.name === 'apples')
const result = inventory.find( ({ name }) => name === 'cherries' || name === 'apples')
console.log(result); // { name: 'apples', quantity: 2 } - return first element from array not first match


// filter: returns a new array containing all elements that satisfy the provided testing function. If no elements satisfy the testing function, an empty array is returned.
const result1 = inventory.filter( ({ name }) => name === 'cherries' || name === 'apples')
console.log(result1);


// slice: returns a new array containing a shallow copy of a portion of the original array, selected from start index to end index (end not included). Does not modify the original array.
const result2 = inventory.slice(1,-1)
console.log(result2);


// splice: changes the original array by removing, replacing, or adding elements. Returns a new array containing the removed elements.
const inventory1 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "Guava", quantity: 9 },
];
const result3 = inventory1.splice(1,2,{name: "Mango", quantity: 3})
console.log(result3);
console.log(inventory1);


// map: returns a new array containing the results of calling a function on every element in the original array. Does not modify the original array.
const resul4 = inventory.map( ({ name }) => {
    if(name === 'apples'){
        return 'Apple'
    }else{
        return false;
    }
})
console.log(resul4);


// for in loop
const lang = {
    name: 'Javascript',
    year: 1995,
    creator: 'Brandan Erich'
}
for(key in lang){
    console.log(key, ':', lang[key])
}
