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

console.log(user?.education?.school?.name) // optional chaining