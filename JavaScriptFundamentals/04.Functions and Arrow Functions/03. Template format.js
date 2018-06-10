function TemplateFormat(data) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');

    for (let i = 0; i < data.length; i++) {

        if (i % 2 == 0)
            console.log('<question>' + '\n'+ data[i] + '\n</question>');
        else
            console.log('<answer>' + '\n'+ data[i] + '\n</answer>');
    }

    console.log('</quiz>');
}

TemplateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"])

