function evenPositionElements(arr) {

    let collector = "";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            collector += " "+arr[i];
        }

    }
    console.log(collector);
}

evenPositionElements(['20', '30', '40']);