function caffeMAchine (arr) {
    let totalMoney = 0;
    let drink = "";
    let coins = 0;
    let price = 0;
    let change = 0;
    for (order of arr) {
        orderArr = order.split(", ");
        coins = orderArr[0];
        drink = orderArr[1];
        if (drink == "coffee") {
            switch (orderArr[2]) {
                case 'caffeine' :
                    price = 0.80;
                    break;
                case 'decaf':
                    price = 0.90;
                    break;
                default:
                    break;

            }

            if (orderArr[3] == "milk") {
                let milkPrice = 0.10*price;
                price += Math.round(milkPrice * 10)/10;
                if (orderArr[4] > 0) {
                    price += 0.10;
                }
            } else {
                if (orderArr[3] > 0) {
                    price += 0.10;
                }
            }
        } else {

            price = 0.80;

            if (orderArr[2] === "milk") {
                let milkPrice = 0.10*price;
                price += Math.round(milkPrice * 10)/10;
                if (orderArr[3] > 0) {
                    price += 0.10;
                }
            } else {
                if (orderArr[2] > 0) {
                    price += 0.10;
                }
            }
        }
        if (coins >= price) {
            change = coins - price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
            coins = change;
            totalMoney += +price;
        } else {
            let moneyNeeded = price - coins;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`)
        }
        price = 0;
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`)
}
//caffeMAchine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2','1.00, coffee, decaf, 0'])
caffeMAchine(['8.00, coffee, decaf, 4','1.00, tea, 2'])