function colorfulNumbers(n) {
    let color = '';
    console.log('<ul>');
    for (let i = 1; i < n + 1; i++) {
        if (i % 2  == 0 ) {
            color = 'blue';
        } else {
            color = 'green';
        }
    console.log(`  <li><span style='color:${color}'>${i}</span></li>`);
    }
    console.log('</ul>');
    
}
colorfulNumbers(10)
