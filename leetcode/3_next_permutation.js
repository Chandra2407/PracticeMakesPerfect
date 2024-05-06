var nextPermutation = function(nums) {
    let n = nums.length;
    for(let i =n-1;i > 0; i--){
        if(nums[i]> nums[i-1]){
            
            break;
        }
    }
    console.log(nums)
}
let arr = [1,2,3]

nextPermutation(arr)