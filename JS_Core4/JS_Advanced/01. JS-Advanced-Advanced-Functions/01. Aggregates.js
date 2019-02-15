function solve(array) {
    function add(a, b) {
        return a + b;
    }
    function mult(a, b) {
        return a * b;
    }

    let join = array.join("");
    console.log("Sum = " + array.reduce(add, 0));
    console.log("Min = " + array.sort(function(a, b){return a-b})[0]);
    console.log("Max = " + array.sort(function(a, b){return b-a})[0]);
    console.log("Product  = " + array.reduce(mult, 1));
    console.log("Join  = " + join);
}
solve([2, 3, 10, 5])