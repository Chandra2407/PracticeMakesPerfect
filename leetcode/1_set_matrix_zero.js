// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/description/

var setZeroes = function (matrix) {
     let coloums = [] 
     let rows = []
     for(let i = 0;i<matrix.length; i++){
        for(j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                rows.push(i)
                coloums.push(j)
            }
        }
     }
     for(let i = 0;i<matrix.length; i++){
        for(j=0;j<matrix[i].length;j++){
            if(rows.includes(i) || coloums.includes(j)){
                matrix[i][j] = 0
            }
        }
     }
     
    return matrix
};

let arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

setZeroes(arr)