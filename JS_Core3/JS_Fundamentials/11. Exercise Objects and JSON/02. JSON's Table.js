function JSONtoHTML (arr) {

   let html = '<table>\n'

    for (let i = 0; i < arr.length; i++) {
        let current = (arr[i]).split(',');
        let namess = current[0].split(':');
        let positionn = current[1].split(':');
        let salaryy = current[2].split(':');

        salaryy[1] = salaryy[1].substring(0,salaryy[1].length -1);

        let name = JSON.parse(namess[1]);
        let position = JSON.parse(positionn[1]);
        let salary  = JSON.parse(salaryy[1]);

        html += '   <tr>\n         <td>' + name + '</td>\n'
        + '         <td>' + position + '</td>\n'
        + '         <td>' + salary + '</td>\n   <tr>\n'


    }
    html +='</table>'
    console.log(html)
}

JSONtoHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])