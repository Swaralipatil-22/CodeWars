// function oddCount(n){
//     let count = 0
//     let arr = []
//     if (n%2 !=0)
//     {
        
//     }
//     // your code here
//   }

function oddcount(n){
    // let n = /
    let arr= []
    for (let i = 1 ; i<n; i+=2){
     arr.push(i);
    }   
    return arr        
}
let n = 7;
let a = oddcount(7);
console.log(a);


function oddcount1(n){
    //  let n = 7
    let arr= []
    for (let i = 1 ; i<n; i++){
    if(i%2 != 0)
     arr.push(i);
    }   
    return arr     
   
}
 console.log(oddcount1(7));




 function oddCount(n){
    let count=Math.floor(n/2);
    return count;
     
  }
  console.log(oddCount(7))


