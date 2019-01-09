function subtract(){
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);

    function subtract(a,b){
        return a - b;
    };
    document.getElementById("result").textContent = subtract(a,b);
};