// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/description/

var generate = function(numRows) {
    let arr = []
    if(numRows == 0) {
        return []
    }
    if(numRows==1){
        return [[1]]
    }
    if(numRows==2){
       return [[1],[1,1]]
    }
    if(numRows>2){
        arr = [[1],[1,1]]
        for(i=2;i<numRows;i++){
            let temp = [1]
            for(j=0;j<arr[i-1].length-1;j++){
                temp.push(arr[i-1][j]+arr[i-1][j+1])
            }
            temp.push(1)
            arr.push(temp)
        }
        return arr
    }
};

generate(3)