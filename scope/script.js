var lang = "English"; // global scope

function learn(topic) { // function scope
    // lang = topic; // - JavaScript
    var lang = topic
    console.log(`I am learning ${topic}`);
}

learn("JavaScript");

console.log(`I know ${lang}`);

/*
    var: 
        is function scoped (limited to inside function)
        can be redeclared and reassigned
    let: 
        block scoped {}
        you can't redeclare but can reassign
*/