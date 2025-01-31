function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let temp = arr[i]
        let j = i-1
        while(j>=0 && temp < arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
    console.log(arr)
}

// insertionSort([5,4,3,2,1])

// we imagine first element already sorted and start with second element

// 5 4 3 2 1
// 4 5 3 2 1
// 4 5 5 2 1
// 4 4 5 2 1
// 3 4 5 2 1


function recursiveBubbleSort(arr,n){
    if( n == 1 ){
        return
    }
    let count  = 0
    for(let i =0; i <n-1;i++){
        if(arr[i] > arr[i+1]){
           [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            count++;
        }
    }
    if(count == 0) {
        return arr
    }

    recursiveBubbleSort(arr, n-1)
    return arr
}

// console.log(recursiveBubbleSort([5,4,3,2,1],5))

const quickSort = (arr)=>{
    if(arr.length < 2) return arr
    let pivot = arr[arr.length-1]
    let left =[]
    let right = []
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([6,4,3,2,1]))
