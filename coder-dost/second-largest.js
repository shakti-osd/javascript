const arr = [2, 4, 5, 3, 7, 11, 15, 13, 3, 15, 2, 15]

function secondLargest(arr) {
  const newArr = arr.sort((a, b) => a - b)
  const updatedArr = [...new Set(newArr)]
  return updatedArr[updatedArr.length - 2]
}
console.log(secondLargest(arr))

// OR

const arr2 = [2, 4, 5, 3, 7, 11, 15, 13, 3, 15, 2, 15]

function secondLargest(arr) {
  const newArr = arr.sort((a, b) => a - b)
  let item = newArr[newArr.length - 1]
  for (let i = newArr.length - 2; i >= 0; i--) {
    if (item !== newArr[i]) {
      return newArr[i]
    }
  }
}
console.log(secondLargest(arr2))
