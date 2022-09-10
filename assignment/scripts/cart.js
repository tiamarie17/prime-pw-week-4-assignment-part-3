console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log(basket);

function addItem(item) {
    basket += item + '\n';
    return true;   
}

console.log(`Basket is ${basket}`);
console.log('Adding soccer ball (expect true)', addItem('soccer ball '));
console.log(`Basket is now ${basket}`);
console.log('Adding cleats (expect true)', addItem('cleats'));
console.log(`Basket is now ${basket}`);
console.log('Adding socks (expect true)', addItem('socks'));
console.log(`Basket is now ${basket}`);


function listItems(array){
    for(let i=0; i < array.length; i++){
        return array;
    }
}
console.log('Listing items in basket array on a new line: \n' + listItems(basket));



function empty(fullArray) {
    fullArray = [];
    return fullArray;
   
}
console.log(empty(basket));





