let printBorder = (array, max) => {

    //just print the border.  If the index is 0 it means that an extra + needs to be added at the start
    return array.map((number,index) => index == 0 ? `+${'-'.repeat(max)}+` : `${'-'.repeat(max)}+`).join("");
}

let printRow = (array, max) => {

    //just print the row.  If the index is 0 it means that an extra | needs to be added at the start
    return array.map((number, index) => {
        
        //calculate amount of spaces needed for the current tab
        const difference = max - number.toString().length;
        return index == 0 ? `|${' '.repeat(difference) + number}|` : `${' '.repeat(difference) + number}|`;
    }).join("");
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

let printCompleteRow = (row, max, upperBorder) => {
    let printedRow = "";
    printedRow += upperBorder ? `${printBorder(row,max)}\n` : "";
    printedRow += `${printRow(row,max)}\n`;
    printedRow += `${printBorder(row,max)}\n`;
    return printedRow;
}

let solution = (array, rowNumber=1) => {

    //find the number with the largest digit
    const max = Math.max(...array).toString().length;

    //split the array into multiple array per row
    const splitArray = setupRows(array, rowNumber);

    //build the table.  If the index is 0 it means that an extra header needs to be added at the start
    const table = splitArray.map((row, index) => printCompleteRow(row, max, index == 0)).join("");
    console.log(table);
}

//testing
solution([43,35,80,123,12345,44,8,5], 10);
solution([43,35,80,123,12345,44,8,5,24,3], 4);
solution([43,35,80,123,12345,44,8,5,24,3,22,35], 4);
solution([4], 1);
solution([1234, 5000, 10, 9, 1000000000], 1000000000);