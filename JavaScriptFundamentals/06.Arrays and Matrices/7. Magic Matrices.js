function magicMatricies(matrix){


    for ( let i = 0; i < matrix.length; i++){
        for ( let j = 1; j < matrix[i].length; j++){
            if(!matrix[i][0].equals(marix[i][j])) {
                return false;
            }
        }
    }
    return true;
}

magicMatricies([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
