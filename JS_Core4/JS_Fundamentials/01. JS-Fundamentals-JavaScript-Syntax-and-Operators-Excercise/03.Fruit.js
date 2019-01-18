function fruit(type, weight, price) {
    console.log(`I need ${((weight/1000)*price).toFixed(2)} leva to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);
}
fruit ('orange', 2500, 1.80);