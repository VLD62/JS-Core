function argumentInfo() {
    let summary = {};
    let total = [];
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
        console.log(type + ': ' + obj);
        
    }
    for (let count in summary) {
        total.push([count,summary[count]]);
    }
    for (let element of total.sort((a,b) => b[1] - a[1])) {
        console.log(element.join(" = "));
    }
}
argumentInfo(32,23,'cat', 42, 'cat', function () { console.log('Hello world!'); });
//argumentInfo({ name: 'bob'}, 3.333, 9.999);