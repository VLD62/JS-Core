function multiplicationTable(n) {
    let str1 = "";
    let str2 = "";
    console.log("<table border=\"1\">");

    for (let i = 1; i <= n; i++) {
        str1 += `<th>${i}</th>`;
    }
    console.log("<tr><th>x</th>"+str1+"</tr>")

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            str2 += `<td>${i*j}</td>`;
        }

        console.log(`<tr><th>${i}</th>${str2}</tr>`)
        str2 = "";
    }
    console.log("</table>");
}

multiplicationTable(5)