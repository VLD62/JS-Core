function diagonalAttack(matrix) {
    //matrix.map(Number);



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

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)