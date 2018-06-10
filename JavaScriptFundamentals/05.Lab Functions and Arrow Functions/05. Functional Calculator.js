function functionalCalculator (num1, num2, action){

   function sum (num1, num2) {
        return num1 + num2;
    }

    function substract (num1, num2) {
        return num1 - num2;
    }

    function multiply (num1, num2) {
        return num1 * num2;
    }

    function divide (num1, num2) {
        return num1 / num2;
    }

    if(action == '+') return sum(num1, num2);
    if(action == '-') return substract(num1, num2);
    if(action == '*') return multiply(num1, num2);
    if(action == '/') return divide(num1, num2);

}
functionalCalculator(2, 4, '+')