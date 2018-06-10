function DayOfWeek (day) {

    if (day.toLowerCase() == 'monday')      return 1;
    if (day.toLowerCase() == 'tuesday')     return 2;
    if (day.toLowerCase() == 'wednesday')   return 3;
    if (day.toLowerCase() == 'thursday')    return 4;
    if (day.toLowerCase() == 'friday')      return 5;
    if (day.toLowerCase() == 'saturday')    return 6;
    if (day.toLowerCase() == 'sunday')      return 7;
    return "error";
}

DayOfWeek("monday")