function warehouseMachine(array) {
    let coffeArray = [];
    function inCommand(array) {
        let coffee = {};
        coffee.brand = array[0];
        coffee.name = array[1];
        coffee.expireDate = array[2];
        coffee.qty = +array[3];
        let brandExists = coffeArray.find(o => o.brand === array[0]);
        let nameExistsExists = coffeArray.find(o => o.name === array[1]);
        if (brandExists === undefined) {
            coffeArray.push(coffee);
        } else if (nameExistsExists === undefined) {
            coffeArray.push(coffee);
        } else if (brandExists !== undefined && nameExistsExists !== undefined) {
            for (object of coffeArray) {
                if (object.brand === coffee.brand && object.name === coffee.name) {
                    if (object.expireDate < coffee.expireDate) {
                        object.qty = coffee.qty;
                        object.expireDate = coffee.expireDate;
                    } else {
                        if (object.expireDate == coffee.expireDate) {
                            object.qty += coffee.qty;
                        }
                    }

                }
            }
        }
    }
    function outCommand(array) {
        let coffee = {};
        coffee.brand = array[0];
        coffee.name = array[1];
        coffee.expireDate = array[2];
        coffee.qty = +array[3];
        let brandExists = coffeArray.find(o => o.brand === array[0]);
        let nameExistsExists = coffeArray.find(o => o.name === array[1]);
        if (brandExists !== undefined) {
            if (nameExistsExists !== undefined) {
                for (object of coffeArray) {
                    if (object.brand === coffee.brand && object.name === coffee.name) {
                        if (object.expireDate > coffee.expireDate) {
                            if (object.qty > coffee.qty) {
                                object.qty = object.qty - coffee.qty;
                            }
                        }
                    }
                }
            }
        }
    }
    function report(array) {
        console.log('>>>>> REPORT! <<<<<')
        let brand = "";
        for (object of array) {
            if (brand !== "1") {
                if (object.brand !== brand ) {
                    console.log(`Brand:${object.brand}:`);
                    brand = object.brand;
                }
            }
            console.log(`->${object.name} ->${object.expireDate} -> ${object.qty}.`);
        }
    }
    function inspection(array) {
        console.log('>>>>> INSPECTION! <<<<<')
        array.sort(function(a, b){
            if(a.brand < b.brand) return -1;
            if(a.brand > b.brand) return 1;
            if(a.qty < b.qty) return 1;
            if(a.qty > b.qty) return -1;
            return 0;
        });
        let brand = "";
        for (object of array) {
            if (brand !== "1") {
                if (object.brand !== brand ) {
                    console.log(`Brand:${object.brand}:`);
                    brand = object.brand;
                }
            }
            console.log(`->${object.name} ->${object.expireDate} -> ${object.qty}.`);
        }
    }
    for (string of array) {
        let strArray = string.split(",")
        command = strArray[0];
        strArray = strArray.slice(1);
        switch (command) {
            case "IN":
                inCommand(strArray);
                break;
            case "OUT":
                outCommand(strArray);
                break;
            case "REPORT":
                report(coffeArray);
                break;
            case "INSPECTION":
                inspection(coffeArray);
                break;
        }
    }
}
warehouseMachine([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
)