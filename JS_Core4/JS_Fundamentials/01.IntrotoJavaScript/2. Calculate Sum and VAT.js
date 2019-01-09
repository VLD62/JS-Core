function caluclateSumVat(arr) {
    let array = arr;
    let totalSum = 0;

    for (let i = 0; i < array.length; i++) {
        totalSum += +array[i];
    }
    console.log(`sum = ${totalSum}`)
    console.log('VAT = '+ totalSum*0.2)
    console.log('total = ' +(totalSum + totalSum*0.2) )
}
caluclateSumVat([1.20, 2.60, 3.50]
)