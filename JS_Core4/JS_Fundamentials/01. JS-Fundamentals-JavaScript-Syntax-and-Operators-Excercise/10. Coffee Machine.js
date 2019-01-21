function coffeMachine (arr) {
    let income = 0;

    for (order of arr) {
        let price = 0;
        order = order.split(",").map(s => s.trim());
        //Check Drink Type
        if (order[1] == "coffee") {
            price += 0.8;
              if (order[2] == "decaf") {
                price += 0.1;
            }

        } else  {
            price += 0.8
        }
        //Check milk
        if (order[3] == "milk" || order[2] == "milk") {
            price += Math.round((price*0.1)*10)/10;
        }
        //Check Sugar
        if (+order[4] > 0 || +order[3] > 0 || +order[2] > 0) {
            price += 0.1;
        }

        if (+order[0] >= price) {
            console.log(`You ordered ${order[1]}. Price: ${price.toFixed(2)}$ Change: ${(Math.round((+order[0] - price)*10)/10).toFixed(2)}$`);
            income += price;
        } else {
            console.log(`Not enough money for ${order[1]}. Need ${(price - +order[0]).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}$`);

}

coffeMachine (['8.00, coffee, decaf, 4',
    '1.00, tea, 2'])