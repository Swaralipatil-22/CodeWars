let numbers = [ 1, 2 ,2 ]
function squareSum(numbers){
let sum = numbers.reduce((acc , num) => acc+num ** 2 , 0);
return sum
}
let sum = squareSum(numbers);
console.log(sum);

