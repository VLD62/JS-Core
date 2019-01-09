function magicMatrices(matrix) {
    matrix.map(elemets => +elemets);
    let allEqual = (array) => (new Set(array).size == 1);
    let firstColSum = 0;
    let colSumTotal = [];
    let rowSum = true;
    for (index in matrix) {
        firstColSum = 0;
        let i = matrix.length;
        for (array of matrix){
            rowSum = ((matrix, array) => (matrix[0].reduce((value, total) => total + value) != array.reduce((value, total) => total + value)) ? false : true)(matrix,array);
        }
        while (i > 0) {
            i--;
            firstColSum += matrix[index][i];
        };
        colSumTotal.unshift(firstColSum);
    }
    return allEqual(colSumTotal) && rowSum ;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));