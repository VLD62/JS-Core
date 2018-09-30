function templateFormat(array) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>");
    array.forEach(function(current_value, index) {
        if (index % 2 == 0) {
            console.log('  <question>\n' +
                '    '+current_value+'\n' +
                '  </question>');
        }
        else {
            console.log('  <answer>\n' +
                '    '+current_value+'\n' +
                '  </answer>');
        }
    });
    console.log("</quiz>");
}
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
)