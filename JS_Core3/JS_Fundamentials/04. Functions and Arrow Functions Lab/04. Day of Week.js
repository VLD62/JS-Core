function dayOfWeek(day) {
    const dayCheck = (day) => ({
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
    })[day]
    if (typeof  dayCheck(day.toLowerCase()) === 'undefined') {
        console.log("error")
    } else {
        console.log(dayCheck(day.toLowerCase()));
    }
}