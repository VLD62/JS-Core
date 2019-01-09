function scoreToHTML(string) {
    var newArr = JSON.parse(string);
    let table = '<table>\n' + '  <tr><th>name</th><th>score</th></tr>\n'
    newArr.forEach(function (object) {
        table += (`  <tr><td>${escapeChars(object.name)}</td><td>${object.score}</td></tr>\n`);
    })
    table += '</table>'
    console.log(table)
    function escapeChars(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')