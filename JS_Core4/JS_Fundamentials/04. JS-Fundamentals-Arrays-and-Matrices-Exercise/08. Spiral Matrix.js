function solve(n1,n2) {
    let total = n1*n2;
    let result= [];
    for(let i=0;i<n1;i++) {
        let rs = [];
        for(let j=0;j<n2;j++) {
            rs.push(0);
        }
        result.push(rs);
    }
    let x=0;
    let y=0;
    let step = 0;
    for(let i=0;i<total;){
        while(y+step<n1){
            i++;
            result[x][y]=i;
            y++;
        }
        y--;
        x++;
        while(x+step<n1){
            i++;
            result[x][y]=i;
            x++;
        }
        x--;
        y--;
        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;
        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        x++;
        y++;
    }
    result.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5)