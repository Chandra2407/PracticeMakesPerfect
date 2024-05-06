
let arr = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function (arr) {
    let maxSum = arr[0];
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        if(sum>maxSum) maxSum = sum
        if(sum<0){
            sum = 0
        }
    }
    console.log(maxSum) 
};

maxSubArray(arr)