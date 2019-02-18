function add(num) {
    function calc(num2) {
        num += num2;
        return calc;
    }
    calc.toString = function() { return num };
    return calc;
}