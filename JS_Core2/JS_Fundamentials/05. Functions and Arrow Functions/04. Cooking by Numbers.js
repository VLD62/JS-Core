function cookingByNumbers(array) {
    let n = array[0];
    let chop   = x => x/2;
    let dice   = x => Math.sqrt(x);
    let spice  = x => x + 1;
    let bake   = x => x * 3;
    let fillet = x => x - (0.2*x);
    for (let i = 1; i <= array.length - 1; i++) {
        if (array[i] == "chop") n = chop(n);
        if (array[i] == "dice")  n = dice(n);
        if (array[i] == "spice") n = spice(n);
        if (array[i] == "bake") n = bake(n);
        if (array[i] == "fillet")  n = fillet(n);
        console.log(n)
    }
}
//cookingByNumbers([9, "dice" , "spice"  ,"chop"  , "bake" , "fillet" ])
cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"])