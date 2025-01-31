let n = 5

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
    // if(n==0){
    //     return [0]
    // }
    // let arr = [0,1]
    // for(i = 2;i<=n;i++){
    //   arr[i] = arr[i-1] + arr[i-2]
    // }
    // return arr
}

function factorial(n) {
    // let fact = 1;
    // for(i=1;i<=n;i++){
    //     fact = fact*i
    // }
    // return fact
    if (n == 1) {
        return n
    }
    return factorial(n - 1) * n
}

// console.log(fibonacci(n))
// console.log(factorial(n))

function linearSearch(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) return i
    }

    return -1
}

function binarySearch(arr, k) {
    if (arr.length <= 0) {
        return -1
    }
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (k == arr[mid]) return mid
        else if (k > arr[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

function recursiveBinary(arr, k) {
    return search(arr, k, 0, arr.length - 1)
}

function search(arr, k, left, right) {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] == k) return mid
    else if (k > arr[mid]) return search(arr, k, mid + 1, right)
    else return search(arr, k, left, mid - 1)

}


let arr = [1, 2, 5, 6, 9, 1, 5, 3, 4, 7]
let k = 6;

// console.log(linearSearch(arr,k))
// console.log(binarySearch(arr,k))
// console.log(recursiveBinary(arr,k))

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

// console.log(bubbleSort(arr))
// console.log(insertionSort(arr))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        // console.log(min, minIndex, JSON.stringify(arr));
    }
    // console.log(JSON.stringify(arr))
}

// selectionSort([2,4,3,5,1,9,7,5])

function tralingZeroes(num) {
    let count = 0;
    for (let i = 5; i <= num; i *= 5) {
        count += Math.floor(num / i)
    }
    console.log(count)
}

// tralingZeroes(30)

function palindrome(num) {
    let res = 0;
    let temp = num;
    while (num > 0) {
        res = res * 10 + num % 10
        num = Math.floor(num / 10)
    }
    if (res === temp) return true

    return false
}

// console.log(palindrome(121121))

function sieveOfEratosthenes(n) {
    let isPrime = new Array(n + 1).fill(true)
    isPrime[0] = false
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2 * i; j <= n; j += i) {
            isPrime[j] = false
        }
    }
    return isPrime;
}

function test() {
    let arr = sieveOfEratosthenes(10)
    arr.map((e, i) => console.log(i, e))
}

// test()

let cities = [["lima", "sau paulo"], ["london", "NYC"], ["NYC", "lima"]]

function findIsolatedCity(cities) {
    let a = [];
    let b = [];
    for (let i = 0; i < cities.length; i++) {
        a.push(cities[i][0])
        b.push(cities[i][1])
    }
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            console.log(b[i])
            return b[i]
        }
    }
}

// findIsolatedCity(cities)

function numberofWays(r, c) {
    if (r == 1 || c == 1) return 1

    return numberofWays(r - 1, c) + numberofWays(r, c - 1)
}


// console.log(numberofWays(3,3))

function subsequence(str) {
    let arr = [""]
    for (let i = 0; i < str.length; i++) {
        let temp = ""
        for (let j = i; j < str.length; j++) {
            temp += str[j]
            arr.push(temp)
        }
    }
    console.log(JSON.stringify(arr))
}

// subsequence("abcd")

function powerSet(str, i, curr, arr) {
    //recursion
    if (i == str.length) {
        arr.push(curr)
        return
    }
    powerSet(str, i + 1, curr + str[i], arr)
    powerSet(str, i + 1, curr, arr)
    return arr
}

function powerSetRec(str, arr) {
    let set = str.split('')
    let powerSet = [[]]
    for (let elem of set) {
        let newSubSet = []
        for (let subSet of powerSet) [
            newSubSet.push([...subSet, elem])
        ]
        powerSet.push(...newSubSet)
    }
    return powerSet.map(set => set.join(""))
}

// console.log(powerSet("abcd",0,"",[]))
// console.log(powerSetRec("abcd",[""]))

function frequencyCounter(arr, n, p) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] == undefined ? 1 : map[arr[i]] + 1

    }
    console.log(map)
}

// frequencyCounter([2, 3, 2, 3, 5],5,5)



function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    console.log(left, "left")
    let right = mergeSort(arr.slice(mid))
    console.log(right, "right")
    let result = merge(left, right)
    console.log(result, "result")
    return result
}

function merge(left, right) {
    let temp = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            temp.push(left.shift())
        }
        else {
            temp.push(right.shift())
        }
    }
    return [...temp, ...left, ...right]
}

// mergeSort([2,4,3,5,1,9,7,5])

function recursiveBubbleSort(arr, n) {
    if (n == 1) {
        return
    }
    let count = 0
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            count++
        }
    }
    if (count == 0) {
        return arr
    }
    recursiveBubbleSort(arr, n - 1)
    return arr
}

// console.log(recursiveBubbleSort([
//     1, 2, 3, 4,
//     5, 5, 7, 9
//   ] ,8),"recursion")

function recursiveInsertionSort(arr, n) {

}

var check = function (nums) {
    let isSorted = true
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            arr1 = nums.slice(0, i + 1)
            arr2 = nums.slice(i + 1)
            break;
        }
    }
    nums = [...arr2, ...arr1]
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            isSorted = false
        }
    }
    console.log(isSorted, nums)
    return isSorted
};

// check([3,4,5,1,2])

function removeDuplicates(arr) {
    let set = new Set(arr)

    return Array.from(set)
}

// removeDuplicates([1,1,2])


var rotate = function (nums, k) {
    let rot = k % nums.length
    for (let i = 0; i < rot; i++) {
        nums.unshift(nums.pop())
    }
    console.log(nums)
    return nums
};

// rotate([1,2,3,3,5,6,7],3)

var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length
    let startIndex = -1
    let endIndex = -1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            startIndex = mid
            endIndex = mid
            for (let i = mid - 1; i >= 0; i--) {
                if (nums[i] == target) {
                    startIndex = i
                }
                else {
                    break
                }
            }
            for (let i = mid + 1; i < nums.length - 1; i++) {
                if (nums[i] == target) {
                    endIndex = i
                }
                else {
                    break
                }
            }
            return [startIndex, endIndex]
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return [startIndex, endIndex]
};

// console.log(searchRange([1,2,3,3,5,6,7],3))

function sortColors(arr) {
    let low = 0;
    let high = arr.length - 1
    let mid = 0
    while (mid < high) {
        if (arr[mid] == 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]]
            mid++
            low++
        }
        else if (arr[mid] == 2) {
            [arr[mid], arr[high--]] = [arr[high], arr[mid]]
        }
        else {
            mid++
        }
    }
    return arr
}

// sortColors([2,0,2,1,1,0])


var arrangeCoins = function (n) {
    let sum = 0;
    let i = 1
    for (i = 0; sum < n; i++) {
        sum += i;
        if (sum > n) {
            sum -= i
            break
        }
    }
    console.log(--i)
};
// arrangeCoins(144)

var nextGreatestLetter = function (letters, target) {
    return letters.find((letter) => letter > target);
};
// console.log(nextGreatestLetter(["c","f","j"],"c"))

var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i]
        else if (prices[i] > minPrice) {
            let profit = prices[i] - minPrice
            if (profit > maxProfit) maxProfit = profit
        }
    }
    console.log(maxProfit)
    return maxProfit
};

// maxProfit([7,6,4,3,1])

var merge = function (intervals) {
    let res = []
    intervals.sort((a, b) => a[0] - b[0])
    let curr = intervals[0]
    res.push(curr)
    for (let interval of intervals) {
        let currStart = curr[0]
        let currEnd = curr[1]
        let nextStart = interval[0]
        let nextEnd = interval[1]
        if (currEnd >= nextStart) {
            curr[1] = Math.max(currEnd, nextEnd)
        }
        else {
            curr = interval
            res.push(curr)
        }
    }
    console.log(res)
    return res
};

// merge([[1, 4], [0, 2], [3, 5]])

function getMinCodeEntryTime(N, M, C) {
    // Write your code here
    let seconds = 0;
    let curr = 1
    for (let i = 0; i < M; i++) {
        let next = C[i]
        let firstTraverse = Math.abs(curr - next)
        let secondTraverse
        let thirdTraverse
        // if(curr<next){
        secondTraverse = (curr - 1) + 1 + (N - next)
        // }
        // else{
        thirdTraverse = (N - curr) + 1 + (next - 1)
        // }

        let minTime = Math.min(firstTraverse, secondTraverse, thirdTraverse)
        // console.log(minTime)
        seconds += minTime
        curr = next
    }
    return seconds;
}
// console.log(getMinCodeEntryTime(10, 4, [1, 5, 2, 6]))

function matchPairs(n, nuts, bolts) {
    // code here
    let obj = {
        "!": 9,
        "#": 8,
        "$": 7,
        "%": 6,
        "&": 5,
        "*": 4,
        "?": 3,
        "@": 2,
        "^": 1
    }
    // for(let i=0;i<n-1;i++){
    //     for(let j=0;j<n-i;j++){
    //         if(obj[nuts[j]] < obj[nuts[j+1]]){
    //             [nuts[j],[nuts[j+1]]] = [nuts[j+1],[nuts[j]]]
    //         }
    //     }
    // }
    nuts.sort((a, b) => obj[b] - obj[a])
    bolts = nuts
    console.log(bolts, nuts)
}

// matchPairs(5,["@", "%", "$", "#", "^"],[])

function lenOfLongSubarr(arr, n, k) {
    //code here
    let map = new Map();
    let sum = 0;
    let len = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum === k) {
            len = Math.max(len, i + 1);
        }

        if (map.has(sum - k)) {
            len = Math.max(len, i - map.get(sum - k));
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    console.log(len)
    return len;
}

// lenOfLongSubarr([-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6],17,15)
// lenOfLongSubarr([10, 5, 2, 7, 1, 9], 6, 15)
// lenOfLongSubarr([-14, 10, -15, 17, 4, 18, 3, -18, -7, -4, -8, 8, -8],13,12)

function longestSubsequenceWithLCM(arr) {
    let n = arr.length
    let longestSubsequence = []
    for (let i = 0; i < n; i++) {

    }

}

// longestSubsequenceWithLCM([1, 2, 4, 8,16])

var removeKdigits = function (num, k) {
    let str = num.split("")
    let digitsRemoved = 0;
    if (str.length === 1) return "0"
    for (let i = 0; i < str.length - 1; i++) {
        if (digitsRemoved < k) {
            if (str[i] > str[i + 1]) {
                str[i] = -1
                digitsRemoved++;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != -1) {
            str[count++] = str[i]
        }
    }
    str.length = count
    console.log(Number(str.join("")).toString())
    return Number(str.join("")).toString()
};

// removeKdigits("9",1)

function searchInSorted(arr, N, K) {
    if (arr.length <= 0) {
        return -1
    }
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (K == arr[mid]) return 1
        else if (K > arr[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}
// console.log(searchInSorted([1,2,3,4,5,6],6,6))

function findUnion(arr1, arr2, n, m) {

    let i = 0, j = 0; // Pointers
    let union = []; // Union array

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) { // Case 1 and 2
            if (union.length === 0 || union[union.length - 1] !== arr1[i])
                union.push(arr1[i]);
            i++;
        } else { // Case 3
            if (union.length === 0 || union[union.length - 1] !== arr2[j])
                union.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) { // If any elements left in arr1
        if (union[union.length - 1] !== arr1[i])
            union.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) { // If any elements left in arr2
        if (union[union.length - 1] !== arr2[j])
            union.push(arr2[j]);
        j++;
    }

    return union;
}

function doUnion(a, n, b, m) {
    const set = new Set();

    for (let num of a) {
        set.add(num);
    }
    for (let num of b) {
        set.add(num);
    }

    return set.size;

}

// console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7, 8], 5, 6))
// console.log(doUnion([85, 25, 1, 32, 54, 6],6,[85,2],2))

var missingNumber = function (nums) {
    // let n = nums.length
    // let hash = new Array(n+1).fill(0)
    // for(let i =0;i<n;i++){
    //     hash[nums[i]]++
    // }
    // for(let i = 0;i<hash.length;i++){
    //     if(hash[i] == 0){
    //         return i
    //     }
    // }
    // return -1
    let n = nums.length
    let sum1 = (n * (n + 1)) / 2
    let sum2 = nums.reduce((acc, curr) => acc + curr)
    console.log(sum1 - sum2)
    return sum1 - sum2
};

// missingNumber([3,0,1])

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
        }
        else {
            count = 0;
            continue
        }
        max = Math.max(count, max)
    }
    console.log(max)
    return max
};

// findMaxConsecutiveOnes([1,1,1,0,1,1])

function reverseArray(arr) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

// console.log(reverseArray([1,2,3,4]))

function findSum(A, N) {
    //code here
    let min = A[0]
    let max = A[0]
    for (let i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i]
            console.log(min, "min")
        }
        if (A[i] > max) {
            max = A[i]
            console.log(max, "max")
        }
    }
    return max + min
}

// console.log(findSum([-2, 1, -4, 5, 3],4))

function sort012(arr, N) {
    let low = 0;
    let high = arr.length - 1
    let mid = 0
    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]]
            low++
            mid++
        }
        else if (arr[mid] == 2) {
            [arr[high], arr[mid]] = [arr[mid], arr[high]]
            high--
        }
        else {
            mid++
        }
    }
    return arr
}

// console.log(sort012([0,2,1,2,0]))

function kthSmallest(arr, l, r, k) {
    arr = arr.sort((a, b) => a - b)
    return arr[k - 1]
}

//   console.log(kthSmallest([1, 2, 6, 4, 5, 3],0,5,4))

function rotateArray(arr) {
    let end = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = end
    return arr
}

// rotateArray([1,2,3,4,5])

//todo later
function getMinDiff(arr, n, k) {
    //your code here
}


var rearrangeArray = function (nums) {
    let stack = new Array(nums.length)
    let i = 0
    let neg = 1
    let pos = 0
    while (i < nums.length) {
        if (nums[i] > 0 ) {
            stack[pos] = nums[i]
            pos+=2
        }
        else if (nums[i] < 0) {
            stack[neg] = nums[i]
            neg+=2
        }
        i++
    }
    return stack
};

// rearrangeArray([3, 1, -2, -5, 2, -4])

function commonElements(arr1, arr2, arr3, n1, n2,n3){
    let minLength = Math.min(arr1.length,arr2.length,arr3.length)
    let minArr = []
    let ans = new Set()
    if(minLength == n1) {
        minArr = [...arr1]
    }
    else if(minLength == n2) {
        minArr = [...arr2]
    }
    else if(minLength == n3){
        minArr = [...arr3]
    }
    for(let i =0;i<minLength;i++){
        if(arr1.includes(minArr[i]) && arr2.includes(minArr[i]) && arr3.includes(minArr[i])){
            ans.add(minArr[i])
        }
    }
    console.log(Array.from(ans))
    return Array.from(ans)
}

commonElements([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120],6,5,8)