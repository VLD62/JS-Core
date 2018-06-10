function evenPositionElements(array){
    let print='';
    function isEven(value) {
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    for (var i = 0; i < array.length; i++) {

        if (isEven(i)) {
            print += array[i] + " "
        }

    }
    console.log(print+" ")
}

evenPositionElements(['20', '30', '40'])