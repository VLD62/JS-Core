function functinalCalculator(a,b,operator) {
    switch (operator) {
        case "+":
            sum(a,b);
            break;
        case "-":
            substract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
        default:
            return "error";
    }
    function sum(a,b) {
        console.log(a + b);
    }
    function substract(a,b) {
        console.log(a - b);
    }
    function multiply(a,b) {
        console.log(a * b);
    }
    function divide(a,b) {
        console.log(a / b);
    }
}

functinalCalculator(2,4,"+");