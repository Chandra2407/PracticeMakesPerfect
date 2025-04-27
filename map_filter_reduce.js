Array.prototype.myMap = function (callback) {
    if (typeof callback != "function") throw new Error(callback + ' is not a function')
    if (this == null) throw new Error('Array.prototype.myMap called on null or undefined')

    let arr = Object(this)
    let length = arr?.length || 0
    let newArr = new Array(length)

    for (let i = 0; i < length; i++) {
        newArr[i] = callback(arr[i], i, arr)
    }
    return newArr
}

let arr = [1, 2, 3]

console.log(arr.map((e) => e * 2))
console.log(arr.myMap((e) => e * 2))


Array.prototype.myFilter = function (callback) {
    if (typeof callback != "function") throw new Error(callback + ' is not a function')
    if (this == null) throw new Error('Array.prototype.myFiler called on null or undefined')

    let arr = Object(this)
    let length = arr?.length || 0
    let newArr = []
    for (let i = 0; i < length; i++) {
        if (callback(arr[i], i, arr)) newArr.push(arr[i])
    }
    return newArr
}

console.log(arr.filter((e) => e >= 2))
console.log(arr.myFilter((e) => e >= 2))

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback != "function") throw new Error(callback + ' is not a function')
    if (this == null) throw new Error('Array.prototype.myReduce called on null or undefined')

    let arr = Object(this)
    let length = arr.length || 0
    let accumulator = initialValue !== undefined ? initialValue : arr[0]
    let index = initialValue !== undefined ? 0 : 1

    if (initialValue === undefined && !length)
        throw new Error("Reduce of empty array with no initial value");

    for (let i = index; i < length; i++) {
        if (!arr[i]) continue
        accumulator = callback(accumulator, arr[i], i, arr)
    }

    return accumulator
}

let abc = [1, 2, , 3]
console.log(abc.reduce((acc, curr) => {
    return acc + curr
}))

console.log(abc.myReduce((acc, curr, i) => {
    return acc + curr
}))