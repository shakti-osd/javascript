// 1) What will be the output
const array = [1, 2, 3, 4, 5] // starts index from 0
const resultSplice = array.splice(1, 2, 10) // array.splice(starting index, replace/remove no of items, what to replace with)
console.log(array) // [1,10,4,5]
console.log(resultSplice) // [2,3]

// 2) What will be the output
const items = [95, 262, 2015, 2009]
const noop = (value) => value

for (var i = 0; i < items.length; i++) {
  noop(items[i])
}

const resultI = i
console.log(resultI) // 4

// 3) What will be the output
const obj = {
  value: 2009,
}
const xyzFunc = function () {
  this.value = 262
}
xyzFunc.call(obj)
const resultObj = obj.value
console.log(resultObj) // 262

// 4) What will be the output
let result = 0
for (let i = 0; i < 5; i++) {
  if (i % 2) {
    result += i
  }
}
console.log(result) // 1  + 3 = 4

// 5) What will be the output
const promise1 = new Promise((resolve, reject) => {
  console.log("First: ", 1)
  resolve("resolve1")
})

const promise2 = promise1.then((res) => {
  console.log(res)
})

console.log("promise1:", promise1)
console.log("promise2:", promise2)

/*
First: 1
promise1: Promise {<fulfilled>: 'resolve1'}
promise2: Promise {<pending>}
resolve1
*/

// 6) Custom Filter Function

Array.prototype.customFilter = function (fn) {
  const filtered = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i])
    }
  }
  return filtered
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr1.customFilter((item) => item % 2 === 0))

// 7) Custom Map Function

Array.prototype.customMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    let item = fn(this[i])
    mapped.push(item)
  }
  return mapped
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr2.customMap((item) => item * 2))

// 8) Custom Reduce Function

Array.prototype.customReduce = function (fn, initialValue = 0) {
  let a = initialValue
  for (let i = 0; i < this.length; i++) {
    fn((a = a + this[i]))
  }
  return a
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.customReduce((a, b) => a + b, 10))

///////////////////////////////////////////////

/*
iFrame Protection
Dependency Security
XSS - Cross Site Scripting
SSRF - Server Side Request Forgery
SSJI - Server Side Javascript Injection 
SRI - Subresource Integrity
CORS - Cross Origin Resource Sharing
CSRF - Cross Site Request Forgery

*/
