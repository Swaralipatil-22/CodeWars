
function multiply (number){
    const b = 5;
    let d= Math.abs(number).toString().length;
    return (number*(b**d))
}
console.log(multiply(-3));