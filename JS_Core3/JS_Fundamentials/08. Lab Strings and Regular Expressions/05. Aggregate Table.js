function aggregateTable(array) {
    let towns = [];
    let totalSum = [];
    for (town of array) {
        towns.push(town.split("|")[1].replace(/^\s+|\s+$/g,""));
        totalSum.push(town.split("|")[2]);
    }
    console.log(towns.join(", "));
    console.log(totalSum.map(x => +x).reduce((a,b) => a +b))
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)