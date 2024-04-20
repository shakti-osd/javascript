// JS Editors
// playcode.io
// jsfiddle.net

// Output of this
obj1 = { a: 10 } // ReferenceError
const obj2 = obj1
obj2.a = 20
console.log("obj1", obj1)
console.log("obj2", obj2)
let obj1 // due to this, will throw ReferenceError

// Uncaught ReferenceError: Cannot access 'obj1' before initialization at <anonymous>:1:6

// console.log(mul(2)(3)(4)) // output 24

function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c
    }
  }
}
console.log(mul(2)(3)(4)) // output 24

// Unsing Arrow function
const multiple = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c
    }
  }
}
console.log(multiple(2)(3)(4))

// Using recursive

function multiply(a) {
  return function (b) {
    if (b) {
      return multiply(a * b)
    } else {
      return a
    }
  }
}
console.log(multiply(2)(3)(4)())

// Custom Promise
const somethingWasSuccesful = true

function someAsynFunction() {
  return new Promise((resolve, reject) => {
    if (somethingWasSuccesful) {
      resolve()
    } else {
      reject()
    }
  })
}
someAsynFunction()
