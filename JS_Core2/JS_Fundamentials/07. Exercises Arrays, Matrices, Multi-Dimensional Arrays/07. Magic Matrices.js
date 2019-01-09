function magicMatricies(matrix) {
    let horizontalSum = matrix.map(function(y){
        return y.reduce(function(a,b){
            return a+b;
        });
    });
    let verticalSum = matrix.reduce(function(a, b){
        return a.map(function(v,i){
            return v+b[i];
        });
    });
    let equalHorizontal = horizontalSum.every( v => v === horizontalSum[0]);
    let equalVertical = verticalSum.every( v => v === verticalSum[0]);
    console.log(equalHorizontal  && equalVertical);
}