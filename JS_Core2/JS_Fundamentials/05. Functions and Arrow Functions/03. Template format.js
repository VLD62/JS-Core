function templateFormat(array) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>");
    quizBuilder(array);
    console.log("</quiz>");
    
    function quizBuilder(array) {
        for (var i = 0; i < array.length; i++) {

            if (i % 2 == 0) {
                console.log("  <question>\n" +
                    "   " + array[i] + "\n" +
                    "  </question>")
            } else {
                console.log("  <answer>\n" +
                    "   " + array[i] + "\n" +
                    "  </answer>")
            }

        }
    }

}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

)