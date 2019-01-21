function calorieObject(arr) {
    let food = {};
    arr.forEach(function (element , index){
        if (index % 2 == 0) {
           food[element] = '';
        } else {
            food[arr[index -1]] = +element;
        }
    });
    console.log(food);
}

calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);