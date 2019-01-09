function multiplicationTable(n) {
    console.log("<table border=\"1\">");
    //Header Row
    let headerRow = ' <tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        headerRow += `<th>${i}</th>`;
    }
    console.log(headerRow+'</tr>');
    //Body row
    let bodyRow ='';
    for (let i = 1; i <= n; i++) {
        bodyRow += ` <tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            bodyRow += `<td>${j*i}</td>`;
        }
        console.log(bodyRow+'</tr>')
        bodyRow = '';
    }
    bodyRow = '';
    console.log("</table>");
}