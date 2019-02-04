function solve(arr) {
    let n = arr.pop() % 10;
    for (let index = 0; index < n; index++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }
    return arr.join(" ");
}