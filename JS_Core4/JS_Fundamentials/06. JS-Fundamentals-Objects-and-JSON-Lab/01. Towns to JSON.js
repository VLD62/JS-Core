function solve(arr) {
    function splitter(string) {
        return string.replace(/\|/g, "").replace(/\s{1,}/g, " ").substring(1).slice(0, -1).split(" ");
    }
    let townObjects = []; 
    let objKeys = splitter(arr[0]);
    for (let index = 1; index < arr.length; index++) {
        let  town = splitter(arr[index]);
        townObjects.push({
            [objKeys[0]]: town[0],
            [objKeys[1]]: +town[1],
            [objKeys[2]]: +town[2],
        });
    }
   townObjects = townObjects.map(x => JSON.stringify(x));
    console.log(townObjects.map(x => x.replace(/'/g, "")));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])