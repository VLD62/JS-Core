function validate() {
    function getMonth(string) {
        switch (string) {
            case "January":
                return "01";
            case "February":
                return "02";
            case "March":
                return "03";
            case "April":
                return "04";
            case "May":
                return "05";
            case "June":
                return "06";
            case "July":
                return "07";
            case "August":
                return "08";
            case "September":
                return "09";
            case "October":
                return "10";
            case "November":
                return "11";
            case "December":
                return "12";
        }
    }
    function zeroAdder(num, size) {
        return ('000' + num).substr(-size);
    }
    function genderGenerator() {
        let gender = "";
        let radios = document.getElementsByName('gender');
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
                break;
            }
        }
        if (gender == "Male") {
            return 2;
        } else {
            return 1;
        }
    }
    function valdiator(number) {
        console.log(number)
        number = number.split("").map(x => +x);
        let reminder = (number[0]*2 + number[1]*4 + number[2]*8 + number[3]*5  + number[4]*10
             + number[5]*9 + number[6]*7 + number[7]*3 + number[8]*6) % 11;
        if (reminder == 10) {
            reminder = 0;
        }
        return reminder;
    }
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        if (+document.getElementById("year").value < 1900  || +document.getElementById("year").value > 2100) {
            return;
        }
        if (+document.getElementById("region").value < 43  || +document.getElementById("region").value > 999) {
            return;
        }
        let year = document.getElementById("year").value.slice(-2);
        let month = getMonth(document.getElementById("month").value);
        let date = zeroAdder(document.getElementById("date").value,2);
        let region = zeroAdder(document.getElementById("region").value,3);

        let gender = genderGenerator();
        let radios = document.getElementsByName('gender');
        document.getElementById("egn").textContent = ("Your EGN is: " +
         year+month+date+(+region + +gender) + valdiator(year+month+date+(zeroAdder(+region + +gender,3))));
        
        document.getElementById("year").value = "";
        document.getElementById("month").value = "Select a month";
        document.getElementById("date").value = "";
        document.getElementById("region").value = "";
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                radios[i].checked = false;
                break;
            }
        }
    });

}

