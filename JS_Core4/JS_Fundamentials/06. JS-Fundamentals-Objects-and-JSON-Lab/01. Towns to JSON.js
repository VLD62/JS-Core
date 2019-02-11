function solve(arr) {
    function splitter(string) {
        return  string.replace(/\s{1,}/g, " ").substring(1).slice(0, -1).split("|");
    }
    let townObjects = []; 
    let objKeys = splitter(arr[0]).map(x => x.substring(1).slice(0, -1));
    for (let index = 1; index < arr.length; index++) {
        let  town = splitter(arr[index]);
        townObjects.push({
            [objKeys[0]]: town[0].substring(1).slice(0, -1),
            [objKeys[1]]: +town[1],
            [objKeys[2]]: +town[2],
        });
    }
    console.log("[" + townObjects.map(x => JSON.stringify(x)).join(",") + "]");
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.69| 23.32 |',
'| Beijing | 39.91 | 116.36 |'])