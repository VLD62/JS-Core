let solution = {
            add: (vec1, vec2) => {
                return [(vec1[0] + vec2[0]), (vec1[1] + vec2[1])];
            },
            multiply: (vec1, n) => {
                return [vec1[0]*n,vec1[1]*n];
            },
            length: (vec1) => {
                return Math.sqrt(Math.pow(vec1[0],2) + Math.pow(vec1[1],2));
            },
            dot: (vec1,vec2) => {
                return vec1[0]*vec2[0] + vec1[1]*vec2[1];
            },
            cross: (vec1,vec2) => {
                return vec1[0]*vec2[1] - vec2[0]*vec1[1];
            }
            
}

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));
(function () {
    return {
        add: (vec1, vec2) => {
            return [(vec1[0] + vec2[0]), (vec1[1] + vec2[1])]
        },
        multiply: (vec1, vec2) => {
            return [vec1[0]*vec2,vec1[1]*vec2]
        },
        length: (vec1) => {
            return Math.sqrt(Math.pow(vec1[0],2) + Math.pow(vec1[1],2))
        },
        dot: (vec1,vec2) => {
            return vec1[0]*vec1[1] + vec2[0]*vec2[1];
        },
        cross: (vec1,vec2) => {
            return vec1[0]*vec2[1] - vec2[0]*vec1[1];
        }

    }
}())