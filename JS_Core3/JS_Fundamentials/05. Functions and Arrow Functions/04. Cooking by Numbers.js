function cookingByNumbers(arr) {
    let n = +arr[0]; arr.shift();
    const actions = (action) => ({"chop": n/2, "dice": Math.sqrt(n), "spice": n+1, "bake": n*3, "fillet": n - (n*0.2)})[action];
    arr.forEach((action) => {console.log(actions(action)); n = actions(action); });
}
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])