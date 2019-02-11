function solve(stringArr) {
    let table = '<table>\n<tr><th>name</th><th>score</th></tr>\n';
    let persons = JSON.parse(stringArr);
    function escapeChars(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    for (person of persons){
        table += '   <tr><td>'+ escapeChars(person['name']) + '</td><td>' + person['score'] + '</td></tr>\n';
    }
    table += '</table>'
    console.log(table);
}
solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')