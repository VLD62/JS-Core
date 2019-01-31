function validate() {
    function vlidator(number) {
        number = number.split("").map(x => +x);
        let reminder = (number[0]*2 + number[1]*4 + number[2]*8 + number[3]*5 
            + number[4]*10 + number[5]*9 + number[6]*7 + number[7]*3 + number[8]*6) % 11;
        if (reminder == 10) {
            reminder = 0;
        }
        if (number.length == 10 ) {
            if (number[number.length - 1] == reminder) {
                return true;
            } else {
                return false;  
            }
        } else {
            return false;
        }
    }
    document.getElementsByTagName('button')[0].addEventListener('click', function() {
        let number = document.getElementsByTagName('input')[0].value;
        if (vlidator(number)) {
            document.getElementById("response").textContent = "This number is Valid!";
        } else {
            document.getElementById("response").textContent = "This number is NOT Valid!";
        }

      });
}