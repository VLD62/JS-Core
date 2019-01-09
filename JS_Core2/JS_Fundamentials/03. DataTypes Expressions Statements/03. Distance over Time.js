function distanceOverTime (array) {
    let s1 = ((array[0]*5)/18) * array[2];
    let s2 = ((array[1]*5)/18)* array[2];

    console.log(Math.abs(s1-s2))
}

distanceOverTime([5, -5, 40])