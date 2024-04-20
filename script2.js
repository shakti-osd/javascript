// Question 1: Map vs forEach
// - Map returns a new array after applying some operations on each items in the array list,
// where as forEach doesn't return anything. We can update the existing array by performing
// some operations on each item
// - We can chain the map result

const arr = [1, 2, 4, 5, 7]

const mapRes = arr.map((item) => item * 2) // multiply each item by 2 and return new list
console.log(mapRes)

const forEachRes = arr.forEach((item, i) => {
  arr[i] = item * 2 // Update the original array
})
console.log(arr)

// Question 2: null vs undefined vs not defined

// null is actual value where as undefined means a variable is declared but it is not initialised
// not defined means a variable is used without its declaration

console.log(typeof null) // object
console.log(typeof undefined) // undefined
// console.log(a) // a is not defined

console.log(null == undefined) // true
console.log(null === undefined) // false

// Question 3: Explain Deligation
// Suppose we have an ecommerce site with bunch of products. We need to perform some actions
// on each products. If we apply events for each item web page will fail and consume most of the
// memory with those events. So, we will apply that event on parent and call that event from
// the child.

// document.querySelector("#products").addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     window.location.href += "#" + event.target.id;
//   }
// });

// Question 4: Flatten the array

const flatArr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8]],
  [9, 10],
]

console.log(flatArr.flat()) // [1, 2, 3, 4, 5, 6, Array(2), 9, 10]
console.log(flatArr.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const flattedArr = [].concat(...flatArr) // [1, 2, 3, 4, 5, 6, Array(2), 9, 10]

// Write custom code for flat function
function customFlat(arr, depth = 1) {
  let result = []
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1))
    } else {
      result.push(ar)
    }
  })
  return result
}
console.log(customFlat(flatArr, 2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Call, apply, bind
// By using these we can manipulate the content of the function
// In the case of function borrowing. We borrow a function from another object
const person = {
  firstName: "Shakti",
  lastName: "Kumar",
}

const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`
}

const myName = fullName.call(person, "Ronit", "Maurya")
const myName2 = fullName.apply(person, ["Ashwini", "Maurya"])
const myName3 = fullName.bind(person, "Advik", "Maurya")
console.log("myName", myName, myName2, myName3())

// Question 5: compose polifill

function addFive(a) {
  return a + 5
}
function subtractTwo(a) {
  return a - 2
}
function multiplyFour(a) {
  return a * 4
}
const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args)
  }
}
const result = compose(addFive, subtractTwo, multiplyFour)
console.log(result(2))

let customPipe = (...functions) => {
  return (args) => {
    return functions.reduce((arg, fn) => fn(arg), args)
  }
}

let pipe = customPipe(addFive, subtractTwo, multiplyFour)
console.log(pipe(2))

// What is Promise?
// Promise is an object which represents the eventual completion or failure
// of an asyncronous operation. It has three states : pending/fulfill/rejected.
// It is Immutable.

// Question 6: Implement Promise.all

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, time)
  })
}

// default promise all
Promise.all([
  showText("hello", 1000),
  Promise.resolve("Hi"),
  Promise.reject("bye"),
]).then((val) => console.log(val))

// custom Promise all
const customPromiseAll = (promises) => {
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res)
        if (index === promises.length - 1) {
          resolve(result)
        }
      }).catch((err) => reject(err))
    })
  })
}

customPromiseAll([
  showText("hello", 1000),
  Promise.resolve("Hi"),
  Promise.reject("bye"),
]).then((val) => console.log(val))

// Question 7: Custom Filter Function
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = arr1.filter((item) => item % 2 === 0)
console.log(result1)

/*
- Create an empty array filterArr.
- Loop through the array elements.
- Called the filterFunc function with the current element as the argument.
- If the result is true, push the element to the filterArr array.
- Return filterArr array after going through all the elements.
*/
Array.prototype.customFilter = function (fn) {
  const filtered = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i])
    }
  }
  return filtered
}

console.log(arr1.customFilter((item) => item % 2 === 0))

// Question 8: Custom Map Function

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const result2 = arr2.map((item) => item * 3)
console.log(result2)

/*
- Create an empty array mapArr.
- Loop through array elements.
- Call function mapFunc with the current element as the argument.
- Push the result of the mapFunc function to the mapArr array.
- Return the mapArr array after going through all the elements.
*/

Array.prototype.customMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    let item = fn(this[i])
    mapped.push(item)
  }
  return mapped
}

console.log(arr2.customMap((item) => item * 3))

// Custom forEach function

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
Array.prototype.customForEach = function (fn, context) {
  if (typeof fn !== "function") throw new Error("Not a function")

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty) {
      fn.call(context, this[i], i, this)
    }
  }
}

arr3.customForEach((item, i) => {
  arr3[i] = item * 2
})
console.log(arr3)
/*
  Memoize the function
*/
function memoize(fn) {
  const cache = {}
  return function () {
    const args = JSON.stringify(arguments)
    if (cache[args]) {
      return cache[args]
    }
    const evaluatedValue = fn.apply(this, arguments)
    cache[args] = evaluatedValue
    return evaluatedValue
  }
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return factorial(n - 1) * n
}
const memoizedFactorial = memoize(factorial)
memoizedFactorial(1000) // slow
memoizedFactorial(1000) // faster

//////////////////////////////////////////////////

const employee = [
  { id: 1, name: "santosh" },
  { id: 2, name: "ganesh" },
  { id: 3, name: "Ramesh" },
  { id: 4, name: "Subham" },
]
const assets = [
  { id: 1, assets: ["laptop", "headset"] },
  { id: 2, assets: ["laptop"] },
  { id: 3, assets: ["laptop"] },
]

/* result

[ 
  {id:1, name:'santosh', numAssets:2} 
  {id:2, name:'ganesh', numAssets:1} 
  {id:3, name:'Ramesh', numAssets:1}
  {id:4, name:'Subham', numAssets:0} 
]
*/

let res = []
employee.forEach((emp) => {
  const match = assets.filter((asset) => asset.id === emp.id)
  console.log("match", match)
  if (match.length > 0) {
    console.log(match[0].assets.length)
    res.push({ ...emp, numAssets: match[0].assets.length })
  } else {
    res.push({ ...emp, numAssets: 0 })
  }
})
console.log(res)
