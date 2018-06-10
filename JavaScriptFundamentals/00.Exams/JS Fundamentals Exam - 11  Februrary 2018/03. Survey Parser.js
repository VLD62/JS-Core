function  surveyParser(string) {
    let text = string.match(/(<svg>.+<\/svg>)/g, (match, g1) => `${g1}`);
    let food = (text+"".match(/(<cat><text>.+<\/text><\/cat><cat>)/g, (match, g1) => `${g1}`)+"").replace( /(^.*\[|\].*$)/g, '', (match, g1) => `${g1}`);
    let ratings = (text+"".match(/(<cat><g>.+<\/g><\/cat><\/svg>)/g, (match, g1) => `${g1}`)+"").match(/<g><val>\d+<\/val>\d+<\/g>/g, (match, g1) => `${g1}`);
    let singleValue = 0;
    let singleVotes = 0;
    let counterVotes = 0;
    let allRatings = 0;

    if (!text) {
        console.log("No survey found")
    } else {
        if (food === null || ratings === null ) {
            console.log("Invalid format")

        } else {
            for (let value of ratings)
            {
                singleValue = Number(((value.match(/<val>([0-9]{1,2})<\/val>/g, (match, g1) => `${g1}`)+"").replace(/\D+/g, '')));
                singleVotes = Number(((value.match(/<\/val>[0-9]{1,7}<\/g>/g, (match, g1) => `${g1}`)+"").replace(/\D+/g, '')));
                allRatings += singleValue * singleVotes
                counterVotes += singleVotes;
            }
            if ( singleValue == 0 || singleVotes == 0) {
                console.log("Invalid format")
            }  else {
                let total  = (allRatings / counterVotes).toFixed(2);
                if (total.slice(-1) === '0' ){
                    total =  total.substr(0, total.length - 1);
                }
                console.log(food +": "+  total);
            }
        }
    }
}
//surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')
//surveyParser('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>')
//surveyParser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>')
//surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')
surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')