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
    for (let element of total) {
        console.log(element)
    }
}
argumentInfo('cat', 42, 'cat', function () { console.log('Hello world!'); });