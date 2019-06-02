let test1 = [43,35,80,123,12345,44,8,5,24,3,22,35];
let test2 = [4];

let printBorder = (array, max) => {

    //just print the border.  If the index is 0 it means that an extra + needs to be added at the start
    return array.map((number,index) => index == 0 ? `+${'-'.repeat(max)}+` : `${'-'.repeat(max)}+`)
}

let printRow = (array, max) => {

    //just print the row.  If the index is 0 it means that an extra | needs to be added at the start
    return array.map((number, index) => {
        
        //calculate amount of spaces needed for the current tab
        const difference = max - number.toString().length;
        return index == 0 ? `|${' '.repeat(difference) + number}|` : `${' '.repeat(difference) + number}|`;
    })
}

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

    let table = "";

    table += `${printBorder(array, max).join("")}\n`;
    table += `${printRow(array, max).join("")}\n`;
    console.log(table);

    debugger;
}

solution(test1, 12);
solution(test2, 1);