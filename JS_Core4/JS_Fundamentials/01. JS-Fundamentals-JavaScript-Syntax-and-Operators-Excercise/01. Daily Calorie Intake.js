function dailyCalorieIntake (array, workouts) {
    let sex     = array[0];
    let weight  = array[1];
    let height  = array[2];
    let age     = array[3];
    let metabolism = 0;
    let calorieDaily = 0;
    let af = 0;
    if (sex == 'm') {
        metabolism = 66 + (13.8 * weight) + (5 * height) - (6.8 * age);
    } else {
        metabolism = 655 + (9.7 * weight) + (1.85 * height) - (4.7 * age);
    }
    if (workouts <= 0) {
        af = 1.2;
    } else if (workouts == 1 || workouts == 2) {
        af = 1.375; 
    } else if (workouts >= 3 && workouts <= 5) {
        af = 1.55; 
    } else if (workouts >= 6 && workouts <= 7) {
        af = 1.725; 
    } else {
        af = 1.90
    }
    console.log(Math.round(metabolism*af));
}
    
dailyCalorieIntake(['m', 86, 185, 25], 3)