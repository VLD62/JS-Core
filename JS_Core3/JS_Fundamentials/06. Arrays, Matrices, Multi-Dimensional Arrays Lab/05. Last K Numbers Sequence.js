function lastKnumbersSequece (n, k) {
    let newArray = [1];
    for (let i = 1; i < n; i++) {
        let element = 0;
        for (let j = 1; j <= k; j++) {
            if ((i-j) >= 0) {
                element += newArray[i-j];
            }
        }
        newArray.push(element);
    }
    return (newArray)
}