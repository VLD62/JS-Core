function extractText(target) {
    let result = [];
    while (true) {
        let start = target.indexOf('(')
        if (start < 0 )
            break
        let end = target.indexOf(')')
        if (end < 0 || end < start)
            break
        result.push(target.substring(start + 1,end))
        target = target.substring(end + 1)
    }
    console.log(result.join(', '))
}