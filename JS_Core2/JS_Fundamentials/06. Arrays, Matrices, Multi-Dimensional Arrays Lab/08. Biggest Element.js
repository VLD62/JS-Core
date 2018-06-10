function biggestElement(matrix) {
    let newArr = [];

    matrixToArray(matrix);

    function matrixToArray(matrix) {
        for(let i = 0; i < matrix.length; i++)
        {
            newArr = newArr.concat(matrix[i]);
        }
    }
    newArr.sort(function (a, b) {return b - a})
    console.log(newArr[0]);

}

biggestElement([[20, 50, 10],
    [8, 33, 145]])