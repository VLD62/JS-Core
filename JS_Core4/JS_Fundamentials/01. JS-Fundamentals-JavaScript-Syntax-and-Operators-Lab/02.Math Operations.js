function mathOperations (num1, num2, oper) {
    switch (oper) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num1 / num2;
        case '*': return num1 * num2;
        case '%': return num1 % num2;
        case '**': return num1 ** num2;

    }
}
mathOperations (5, 6, '+')