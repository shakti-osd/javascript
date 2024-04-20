// Custom Promise

const somethingWasSuccesful = true

function someAsynFunction() {
  return new Promise((resolve, reject) => {
    if (somethingWasSuccesful) {
      resolve()
    } else {
      reject("failed")
    }
  })
}

const result = someAsynFunction()
result.then(() => console.log("Success")).catch((err) => console.log(err))

// Custom Map
const arr = [1, 2, 3, 4, 5, 6]
Array.prototype.customMap = function (fn) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let item = fn(this[i])
    result.push(item)
  }
  return result
}

const resultMap = arr.customMap((item) => item * 2)
console.log(resultMap)

// Custom Filter
const arr2 = [1, 2, 3, 4, 5, 6]
Array.prototype.customFilter = function (fn) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i])
    }
  }
  return result
}
const resultFilter = arr2.customFilter((item) => item % 2 === 0)
console.log(resultFilter)

// Custom Reduce
const arr3 = [1, 2, 3, 4, 5, 6]

Array.prototype.customReduce = function (fn, initialValue = 0) {
  let a = initialValue
  for (let i = 0; i < this.length; i++) {
    fn((a = a + this[i]))
  }
  return a
}

const reduceResult = arr3.customReduce((a, b) => a + b, 10)
console.log(reduceResult)

// Recursive Curring
function customCurring(a) {
  return function (b) {
    if (b) {
      return customCurring(a * b)
    } else {
      return a
    }
  }
}

const resultCurring = customCurring(2)(3)(4)()
console.log(resultCurring)
