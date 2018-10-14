function restaurantBill(array) {
    let totalSum = 0;
    let products = [];
    array.forEach(function (element, index) {
        if (index % 2 !== 0) {
           totalSum += (+element);
        } else {
            products.push(element);
        }
    })
    return (`You purchased ${products.join(", ")} for a total sum of ${totalSum}`);
}
console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));