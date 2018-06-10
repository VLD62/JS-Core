function diagonalSums(matrix) {
    console.log(firstDiagonalSum(matrix) + " " + secondDiagonalSum(matrix));
    function firstDiagonalSum(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i == j) {
                    sum += matrix[i][j];
                }

            }
        }
        return sum;
    }

    function secondDiagonalSum(matrix) {
        let sum = 0;
        for (let i =  0; i < matrix.length ; i++) {
            for (let j = matrix.length - 1; j >= 0 ; j--) {
                if (i + 1 == matrix.length - j ) {
                    sum += matrix[i][j];
                }
            }
        }
        return sum;
    }
}

diagonalSums([[20, 40],
    [10, 60]])