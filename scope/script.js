const user = {
    name: 'jak',
    age: 26,
    education: {
        degree: 'Graduate',
        school: {
            name : "X"
        }
    }
}

const {
    name, age,
    // education: {degree}
    education: {degree} = {} // fallback
} = user
console.log(name,age, degree)