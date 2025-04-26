// "use strict";
{
    var a;
    let b;
    const c = 1;
}

if(true){
    var a;
    let b;
    const c = 1;
    foo()
    function foo(){
        console.log("foo1");
    }
    let d
}
foo()


// closures

function a(){
    let a = 1;
    return function(){
        console.log(a);
    }
}
// a()();

function createCounter() {
    let count = 0; // This variable is "closed over" by the inner function

    return function() {
        count++; // The inner function retains access to `count`
        console.log(`Current count: ${count}`);
    };
}

const counter = createCounter();

// Simulate asynchronous operations using setTimeout
// setTimeout(counter, 1000); // After 1 second: "Current count: 1"
// setTimeout(counter, 2000); // After 2 seconds: "Current count: 2"



function createApiCaller(url) {
    let callCount = 0; // This variable is "closed over" by the inner function

    return function() {
        callCount++; // Increment the call count
        console.log(`API call #${callCount} to ${url}`);

        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(`Data from call #${callCount}:`, data);
                return data;
            });
    };
}

const fetchData = createApiCaller('https://jsonplaceholder.typicode.com/posts/1');

// Simulate multiple asynchronous API calls
// fetchData().then((data) => console.log('First call result:', data));
// fetchData().then((data) => console.log('Second call result:', data));

// for(var test=0;test<4;test++){
//     function close(i){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
//     close(test)
// }

// for(let test=0;test<4;test++){
//     // function close(i){
//         setTimeout(()=>{
//             console.log(test);
//         },1000*test)
//     // }
//     // close(test)
// }

// Function Factories example

function multiplier(num){
    return function(x){
        return num*x
    }
}

const multiplyBy5 = multiplier(5);
const multiplyBy10 = multiplier(10);
// console.log(multiplyBy5(2)); // 10
// console.log(multiplyBy10(2)); // 20

function memoize(func){
 let cache = {}
 return function(args){
    if(cache[args]){
        console.log("from cache");
        return cache[args]
    }
    console.log("from function");
    cache[args] = func(args)
    return cache[args]
 }
}

function expensiveCalc(x){
    return x+10
}

const memoizedExpensiveCalc = memoize(expensiveCalc);
// console.log(memoizedExpensiveCalc(2));
// console.log(memoizedExpensiveCalc(2));


function once(){
    let hasbeenCalled = false;
    return function(){
        if(hasbeenCalled){
            console.log("Already called");
            return
        }
        console.log("First time called");
        hasbeenCalled = true;
    }
}

const callOnce = once();
// callOnce();
// callOnce();


function minBy(array, iteratee) {
    let minValue = iteratee(array[0])
    let minItem = minValue ? array[0] : undefined
    for(let i=1;i<array.length;i++){
      let currValue = iteratee(array[i])
      let currItem = currValue ? array[i] : undefined
      console.log(currValue,currItem)
      if((currValue<minValue && currValue) || !minValue){
        minValue = currValue
        minItem = currItem
      }
    }
    return minItem
  }

//   console.log(minBy([{ n: 1 }, { n: 2, m: 3 }, { m: 4 }], (o) => o.m))


{
    let ankita
}
