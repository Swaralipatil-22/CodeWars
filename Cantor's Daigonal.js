function cantor(nestedList) {
    const a = []

    for (let i = 0 ; i<nestedList.length;i++){
        if(nestedList[i]== nestedList[i]) {
            if(nestedList[i][i] == 0){
                a.push(1);
            }
            else {
                a.push(0);
            }
        }
    }
    return a;
}

const nestedList = [[1,0,1],
                   [0,0,1],
                   [1,0,0]];

const reversevalue = cantor(nestedList)
console.log(reversevalue);

