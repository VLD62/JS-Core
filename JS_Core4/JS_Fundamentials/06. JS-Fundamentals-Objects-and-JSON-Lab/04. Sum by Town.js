function solve (array) {
    let objArr = [];
    for (let i = 0; i < array.length; i+=2) {
        let townObj = {}
        townObj['name'] = array[i];
        townObj['income'] = array[i+1];
        objArr.push(townObj);
    }
    let result = objArr.reduce((h, a) => Object.assign(h, { [a.name]:( h[a.name] || [] ).concat(a) }), {});
    let newArr = [];
    for (town of Object.values(result)) {
        let townObject = {
        };
        let townName = "";
        let townIncome = 0
        for (eachTown of town) {
            townName    =  eachTown.name;
            townIncome += +eachTown.income;
        }
        townObject[townName] = townIncome;
        newArr.push(townObject);
    }
    console.log(JSON.stringify(newArr).replace(/\}\,\{/g,",").substr(1).slice(0,-1));

}
    
solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])