function lastMonth(array) {
    let lastDay = new Date(array[2], array[1]-1, 0);
    lastDay = lastDay.getDate();
    console.log(lastDay);
}

lastMonth([13, 12, 2004])