
let name = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

// console.log(fullName.call(name,"new your", "male")); // John Doe

let name2 = {
    firstName: "Jane",
    lastName: "Smith"
}

//function borrowing

// console.log(fullName.call(name2, "new york", "female"));

// console.log(fullName.apply(name2, ["new york", "female"])); // Jane Smith undefined

// let fullNameBind = fullName.bind(name2)("new york", "female")
// console.log(fullNameBind)

console.log("🤓"); // Jane Smith undefined

// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.max.call(null, 1, 2, 3, 4, 5)); // 5
// console.log(Math.max.apply(null, [1, 2, 3, 4, 5])); // 5


let test = {
    name: "chandra",
    getName: function () {
        console.log(this.name, "hey", this)
        return this.name
    }
}

// test.getName()

function checkTest(test) {
    test()
}
// checkTest(test.getName.bind(test))

let fullName = function (hometown, gender) {
    // this refers to the object that is calling the function
    console.log((this.firstName ?? "") + " " + (this.lastName ?? "") + " " + (this.age ?? "") + " " + (hometown ?? "") + " " + (gender ?? ""));
}

Function.prototype.myCall = function (context, ...args) {
    if (typeof this != "function") throw new Error(`${this} not a function`)
console.log(this,context)
    context.fn = this
    context.fn(...args)
}
// fullName.call(name, "delhi", "male")
fullName.myCall(name, ["delhi", "female"])

Function.prototype.myApply = function (context, args) {
    if (typeof this != "function") throw new Error(`${this} not a function`)

    if (!Array.isArray(args)) throw new Error(`args are not of array type`)
    context.fn = this
    context.fn(args)

}

// fullName.apply(name, ["delhi"])
// fullName.myApply(name, ["delhi,26"])


Function.prototype.myBind = function (context = {}, ...args) {
    if(typeof this != "function") throw new Error(`${this} not a function`)
    context.fn = this
    return function(...newArgs){
        return context.fn(...args, ...newArgs)

    }
}

fullName.bind(name, "delhi")("transformer")
fullName.myBind(name, "delhi")("transforme gayr")

console.log(typeof null)
