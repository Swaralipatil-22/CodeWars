// Sum Numbers
let numbers = [ 2.3, 4.5 , 3.3 , 2 , 5]
function sum (numbers) {
    "use strict";
    let add = numbers.reduce ((arr , num) => arr+num , 0)
    return add
};
let add = sum(numbers);
console.log(add);