function scoreToHTML(jsonString) {
    function escapeChars(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let table = "<table>\n  <tr><th>name</th><th>score</th></tr>\n"
    let objs = JSON.parse(jsonString);
    for (obj of objs) {
        table += `  <tr><td>${escapeChars(obj['name'])}</td><td>${obj['score']}</td></tr>\n`
    }
    console.log(table+"</table>");
}
//scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')