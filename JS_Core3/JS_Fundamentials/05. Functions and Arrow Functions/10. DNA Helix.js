function dnaHelix(num) {
    function stringBuilder(char, counter) {
        switch (counter) {
            case 0:  return `**${char}**`;
            case 1:  return `*${char.charAt(0)}--${char.charAt(1)}*`;
            case 2:  return `${char.charAt(0)}----${char.charAt(1)}`;
            case 3:  return `*${char.charAt(0)}--${char.charAt(1)}*`;
            default: return;
        }
    }
    function numtoArray(n) {
        let array = [];
        for (let i = 1; i <= n; i++) {
            array.push(i);
        }
        return array;
    }
    const symbol = (counter) => ({
         0: 'AT',
         1: 'CG',
         2: 'TT',
         3: 'AG',
         4: 'GG'
    })[counter];
    let newArr = numtoArray(num);
    let counter = 0;
    let counter2 = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (counter == 5) {counter = 0};
        if (counter2 == 4) {counter2 = 0};
        console.log(stringBuilder(symbol(counter), counter2));
        counter++;
        counter2++;
    }
}

dnaHelix(10);


