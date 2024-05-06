
let nums = [0,1,2,0,1,2]

var sortColors = function(nums) {
    let countOfRed = 0;
    let countOfWhite = 0;
    let countOfBlue = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
            countOfRed++
        }
        if(nums[i] == 1){
            countOfWhite++
        }
        if(nums[i]== 2){
            countOfBlue++
        }
    }
    for (let i = 0; i < nums.length; i++) {
            if(countOfRed>0){
                nums[i] = 0;
                countOfRed--;
                continue;
            }
            if(countOfWhite>0){
                nums[i] = 1;
                countOfWhite--;
                continue;
            }
            if(countOfBlue>0){
                nums[i] = 2;
                countOfBlue--;
                continue;
            }
    }
    console.log(nums)
    return nums
};

let sortColorsBetter = function(nums) {
    let i = 0;

    let left = 0,
      right = nums.length - 1;
  
    while (i <= right && left < right) {
      if (nums[i] === 0) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
        left++;
        i++;
      } else if (nums[i] === 2) {
        [nums[i], nums[right]] = [nums[right], nums[i]];
        right--;
      } else {
        i++;
      }
}
console.log(nums)
}

// sortColors(nums)
sortColorsBetter(nums)