function htmlEscape(input) {
    console.log('<ul>')
    input.forEach(function (element) {
        let newElement = "";
        newElement = element.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

        console.log('<li>' + newElement + '</li>');

    })
    console.log('</ul>')
}
htmlEscape(['<b>unescaped text</b>', 'normal text'])