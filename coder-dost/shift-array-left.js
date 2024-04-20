const arr = [2, 7, 11, 4, -2]

function rotateLeft(arr, rotate) {
  for (let i = 0; i < rotate; i++) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = temp
  }
  return arr
}
console.log(rotateLeft(arr, 2))
