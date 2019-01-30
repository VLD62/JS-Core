function leapYear() {
    function checkLeap (year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 'Leap Year' : 'Not Leap Year';
    }
    document.getElementsByTagName('button')[0].addEventListener('click', function() {
        let year = document.getElementsByTagName('input')[0].value;
        document.getElementById("year").childNodes[1].textContent = checkLeap(year);
        document.getElementById("year").childNodes[3].textContent = year;
        document.getElementsByTagName('input')[0].value = "";
      });
}