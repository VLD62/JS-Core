function diagonalSums(mtrx) {
    let sum1 = 0, sum2 = 0
    for (let index in mtrx){
        let i = index
        sum1 += mtrx[i][i];
        sum2 += mtrx[i][(mtrx.length-1)-i];
    } return (sum1 + " " + sum2);
}
