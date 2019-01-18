function fintessRates(day,service,time){
    let price = 0;
    if (service == "Fitness"){
        price = 5;
    } else if (service == "Instructor") {
        price = 10;
    } else {
        price = 4;
    }
    if (day == 'Saturday' || day == 'Sunday') {
        if (price == 10) {
            price += 5;
        } else {
            price += 3;
        }
       
    } else {
        if (+time > 15.00) {
            price += 2.5; 
        }
    }
    console.log(price);
}
fintessRates('Sunday', 'Fitness', 22.00);