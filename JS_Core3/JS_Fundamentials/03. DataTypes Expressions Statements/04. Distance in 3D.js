function distance3d(arrNum) {
    console.log(Math.abs(Math.sqrt(
        Math.pow(arrNum[0]-arrNum[3],2) +
        Math.pow(arrNum[1]-arrNum[4],2) +
        Math.pow(arrNum[2]-arrNum[5],2)
    )))
}
distance3d([3.5, 0, 1, 0, 2, -1])