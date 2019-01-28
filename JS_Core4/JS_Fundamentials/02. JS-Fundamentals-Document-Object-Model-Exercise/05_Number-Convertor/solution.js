function solve() {
    let fldInput = document.getElementById('input');
    let fldResult = document.getElementById('result');
    let selectTo = document.getElementById('selectMenuTo');
    let optionBinary = document.createElement("option");
    optionBinary.text = "Binary";
    optionBinary.value = "binary";
    selectTo.appendChild(optionBinary);
    let optionHex = document.createElement("option");
    optionHex.text = "Hexadecimal";
    optionHex.value = "hexadecimal";
    selectTo.appendChild(optionHex);
    let btnConvert = document.querySelector('#exercise #menus button');
    btnConvert.addEventListener('click', fnConvert);
    function fnConvert() {
        if (selectTo.value == "hexadecimal") {
            fldResult.value = (+fldInput.value).toString(16).toUpperCase();
        } else {
            fldResult.value = (+fldInput.value).toString(2);
        }
    }
}