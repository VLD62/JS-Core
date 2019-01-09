function moviePrices(array) {
    let day = array[1].toLowerCase();
    let movie = array[0].toLowerCase();
    let price = 0;

    switch (day) {
        case "monday":
            if (movie == 'the godfather' && day == 'monday') {
                price = 12;
            };

        case "tuesday":
            if (movie == 'the godfather' && day == 'tuesday') {
                price = 10;
            };
        case "wednesday":
            if (movie == 'the godfather' && day == 'wednesday') {
                price = 15;
            };
        case "thursday":
            if (movie == 'the godfather' && day == 'thursday') {
                price = 12.50;
            };
        case "friday":
            if (movie == 'the godfather' && day == 'friday') {
                price = 15;
            } else if (movie == 'schindler\'s list') {
                price = 8.50;
            } else if (movie == 'casablanca') {
                price = 8;
            } else if (movie == 'the wizard of oz') {
                price = 10;
            } else {
                console.log("error")
            };
            break;
        case "saturday":
            if (movie == 'the godfather' && day == 'saturday') {
                price = 25;
            }
        case "sunday":
            if (movie == 'the godfather' && day == 'sunday') {
                price = 30;
            } else if (movie == 'schindler\'s list') {
                price = 15;
            } else if (movie == 'casablanca') {
                price = 10;
            } else if (movie == 'the wizard of oz') {
                price = 15;
            } else {
                console.log("error")
            };
            break;
        default:
            console.log("error");
    }
    if (price > 0) {
        console.log(price);
    }
}

moviePrices(['The Godfather','SUNDAY']);