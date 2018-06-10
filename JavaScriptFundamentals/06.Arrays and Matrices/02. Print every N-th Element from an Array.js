function printEveryNthElementFromArray (array) {
    let step = Number(array.pop());
    for (var i = 0; i < array.length; i+= step) {
        console.log(array[i])
    }
}
printEveryNthElementFromArray(["5","20","31","4","20","2"])

/**
 *@param {Array} dataArray
 **/
function solve(dataArray) {
    let step = Number(dataArray.pop());
    for (let i = 0; i < dataArray.length; i+= step) {
        console.log(dataArray[i]);
    }
}
solve(["5","20","31","4","20","2"])