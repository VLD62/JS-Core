function restaurantBill(array) {
    let meals = [];
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 ==0) {
            meals.push(array[i]);
        } else {
            totalSum += Number(array[i]);
        }

    }
    console.log('You purchased ' + meals.join(", ") + " for a total sum of " +totalSum);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])