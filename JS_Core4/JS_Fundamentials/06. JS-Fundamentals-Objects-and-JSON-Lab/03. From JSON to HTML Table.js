function solve(string) {
    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let table = '<table>\n   <tr>';
    let objArr = JSON.parse(string);
    for (key in objArr[0]) {
        table += "<th>" + key + "</th>"

    }
    table += "</tr>\n";
    for (obj of objArr) {
        table += `   <tr>`
            for (key of Object.keys(obj)) {
                if (typeof obj[key] === 'string') {
                    table += `<td>${escapeChars(obj[key])}</td>`
                } else {
                    table += `<td>${obj[key]}</td>`
                }
            }
        table += '</tr>\n'
    }
    table += "</table>"
    console.log(table);
}
//solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')
