function solve(matrix) {
    let allEqual = arr => arr.every( v => v === arr[0] )
    let colSum = [];
    let rowSum = matrix[0].reduce((x,y) => x + y, 0);
    for (let index = 0; index < matrix.length; index++) {
        let colSum2 = 0;
        if (matrix[index].reduce((x,y) => x + y, 0) != rowSum) {
            return false;
        }
        for (let index2 = 0; index2 < matrix.length; index2++) {
             colSum2 += matrix[index][index2];
        }
        colSum.push(colSum2);
    }
    return allEqual(colSum);
}
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   ));