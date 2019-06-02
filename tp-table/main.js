let test1 = [43,35,80,123,12345,44,8,5,24,3,22,35];
let test2 = [43];

let setupRows = (array, rowNumber) => {

    //determine by many iteration need to be done to immutably split the array
    const divide = Math.floor(array.length / rowNumber); 
    let splitArray = [];

    //determine if dividing is required else just return the array back
    if(divide > 1){
        for(let i = 0; i <= divide; i++){
            splitArray.push(array.slice(i * rowNumber, (i + 1) * rowNumber));
        }
        return splitArray;
    } else {
        return new Array(array);
    }
}


let solution = (array, rowNumber=1) => {

    //find the number with the largest digit
    const max = Math.max(...array).toString().length;

    //split the array into multiple array per row
    const splitArray = setupRows(array, rowNumber);

    debugger;
}

solution(test1, 12);
solution(test2, 1);