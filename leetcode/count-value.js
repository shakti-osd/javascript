/*
//# 1
// Task: calculate the number of identical elements
// You need to output the number of repetitions of elements for each element to the console.
// Example: "value - quantity in the object"
// for this object - { a: 3, b:  1, c: 2, d: 1 }
const obj1 = {
  1: 'a',
  2: 'b',
  3: 'a',
  4: 'c',
  5: 'a',
  6: 'd',
  7: 'c',
};

*/

const obj1 = {
  1: "a",
  2: "b",
  3: "a",
  4: "c",
  5: "a",
  6: "d",
  7: "c",
}

function countOccurrences(obj) {
  const result = {}

  for (let key in obj) {
    const value = obj[key]
    result[value] = (result[value] || 0) + 1
  }
  return result
}

function countOccurance(obj) {
  let result = {}
  for (let key in obj) {
    const value = obj[key]
    if (!result.hasOwnProperty(value)) {
      result[value] = 1
    } else {
      result[value]++
    }
  }
  return result
}

// Call the function
const output = countOccurrences(obj1)
console.log(output)

//////////////////////////////////////////////////////////

const object = {
  name: "John",
  hi() {
    console.log(`Hello, ${this.name}!`)
  },
}

object.hi() // Hello, John
setTimeout(object.hi, 1000) // Hello, undefined

//////////////////////////////////////////////////////////

let obj = { a: 5 }

let f = (o) => (o = { a: 3 })

f(obj)
console.log(obj.a) // 5

///////////////////////////////////
// Increment elements that are larger than the previous one in the original array
const ar = [4, 5, 6, 7, 8, 9, 2, 0, 3, 0]
function printElements(arr, n) {
  // Traverse array from index 1 to n-2
  // and check for the given condition
  for (var i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) console.log(arr[i] + " ")
  }
}
var arr = [2, 3, 1, 5, 4, 9, 8, 7, 5]
var n = arr.length

printElements(arr, n)

////////////////////////////////////////////////

// Sort by age in decending order
const arr1 = [
  { name: "shakti", age: 25 },
  { name: "rahul", age: 21 },
  { name: "pavan", age: 27 },
]
function sortObj(arr) {
  const result = arr.sort((a, b) => {
    let A = a.age
    let B = b.age
    if (A > B) {
      return -1
    }
  })
  return result
}
console.log(sortObj(arr1))

////////////////////////////

// Add object in Array of Object
const arrObj = [
  { name: "shakti", age: 25 },
  { name: "rahul", age: 21 },
  { name: "pavan", age: 27 },
]
const objAdd = { address: "Gaya" }

function countValue(arrObj, objAdd) {
  let result = []
  for (let item of arrObj) {
    result.push(Object.assign(item, objAdd))
  }
  return result
}

console.log(countValue(arrObj, objAdd))
