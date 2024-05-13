let arr1 = [1 , 3, 4 , 5 ]
let arr2 = [3 , 5 , 6 , 7 ]
function arrayPlusArray(arr1 , arr2){
let sum = arr1.concat(arr2).reduce((arr1, arr2) => arr1+arr2 ,0) 
    return sum; //something went wrong
}
sum = arrayPlusArray(arr1 , arr2)
console.log(sum);