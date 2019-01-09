function jsonToHTMLTable(jsonString) {
    function escapeChars(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let objs = JSON.parse(jsonString);
    let table = "<table>\n   <tr>";
    for (key in objs[0]) {
        table += `<th>${key}</th>`;
    }
    table += '</tr>\n'
    for (obj of objs) {
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
    console.log(table+"</table>");
}
jsonToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')