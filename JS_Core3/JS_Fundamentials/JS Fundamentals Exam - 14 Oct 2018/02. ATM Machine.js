function atMMachine(matrix) {
    function add(a, b) {
        return a + b;
    }
    const twoSum = (arr, target) => {
        let map = {};
        let results = [];
        for (let i=0; i<arr.length; i++) {
            if (map[arr[i]] !== undefined) {
                results.push([map[arr[i]], arr[i]])
            } else {
                map[target - arr[i]] = arr[i];
            }
        }
        return results;
    }
    let totalCashInATM = 0;
    let accountBalance = 0;
    let atmBanknotes = [];
    for (array of matrix) {
        //Insert Money
        if (array.length > 2) {
            let insertedCash = 0;
            insertedCash = array.reduce(add, 0);
            totalCashInATM += insertedCash;
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
            for (banknote of array) {
                atmBanknotes.push(banknote);
            }
        }
        //Withdraw Money
        if (array.length == 2) {
            accountBalance = +array[0];
            let withdraw = +array[1];
            if (accountBalance < withdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else {
                if (withdraw > totalCashInATM) {
                    console.log('ATM machine is out of order!');
                } else {
                    atmBanknotes = atmBanknotes.sort( (a, b) =>  b-a );
                    for (let element of JSON.stringify(twoSum(atmBanknotes,withdraw)).substr(2).slice(0,-2).split(",")){
                        console.log(element)
                        for (let i = 0; i < atmBanknotes.length; i++) {
                        //NON WORKING
                            if (element == +atmBanknotes[i]) {
                                console.log(i)
                                atmBanknotes.splice(i, 1);
                                break;
                            }
                        }
                        console.log(atmBanknotes)
                    }
                    totalCashInATM = atmBanknotes.reduce(add, 0);
                    accountBalance = accountBalance - withdraw;
                    console.log(`You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`);
                }
            }
        }
        //Report
        if (array.length == 1) {
            let banknote = +array[0];
            let banknoteCount = 0;
            for (banknotes of atmBanknotes) {
                if (+banknotes == banknote) {
                    banknoteCount++;
                }
            }

            console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`);
        }
    }
}
atMMachine([[20, 5, 100, 20, 1],
        [5, 5],
        [5],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [0, 0],
        [0, 0],
    ]
)