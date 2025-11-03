// catch DOM elements
const button = document.getElementById("button");
const totalUi = document.getElementById("total");
const price = document.getElementById("price");

// state or data
const productPrice = 5000
let total = 0;

// set product price on load
price.innerText = `৳ ${productPrice}`;
totalUi.innerText = "Total: ৳ 0";

// listen click event
button.addEventListener('click', function(){
    total += productPrice

    // update ui
    totalUi.innerText = `৳ ${total}`;
})
