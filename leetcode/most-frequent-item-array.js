const arr = [1, 2, 4, 2, 6, 9, 2, 4, 5, 1, 7]

function repeatedNumber(arr) {
  var item
  let mf = 1
  let m = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++
      }
      if (mf < m) {
        mf = m
        item = arr[i]
      }
    }
    m = 0
  }
  return [mf, item]
}

console.log(repeatedNumber(arr)) // 2 occures 3 times
