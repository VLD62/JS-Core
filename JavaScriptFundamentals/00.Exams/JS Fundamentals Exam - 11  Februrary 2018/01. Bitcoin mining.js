function bitcoinMining(arr) {
    let totalGold = 0;
    let firstDay = 0
    let counter = 0
    let bitcoinTotal =0;
    for (let i = 0; i < arr.length ; i++) {
        if ((i + 1) % 3 == 0) {
            totalGold += (arr[i] - (arr[i] * 0.3))* 67.51;
        } else {
            totalGold += arr[i] * 67.51;
        }

        while (totalGold > 11949.16) {
            if (counter == 0) {
                counter = 1;
                firstDay = i + 1;
            }
            bitcoinTotal++
            totalGold = totalGold  -  11949.16;

        }
    }

    console.log(`Bought bitcoins: ${bitcoinTotal}`)
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`)


}

bitcoinMining([3124.15,
    504.212,
    2511.124])