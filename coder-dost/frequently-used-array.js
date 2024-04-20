function frequentUsedNumber(arr) {
  let obj = {}
  arr.forEach((ele) => {
    if (obj.hasOwnProperty(ele)) obj[ele]++
    else obj[ele] = 1
  })
  let result = Object.keys(obj).reduce((acc, cur) => {
    return obj[acc] > obj[cur] ? acc : cur
  })
  return [Number(result), obj[result]]
}
const arr = [1, 2, 4, 3, 5, 2, 6, 7, 4, 3, 7, 9, 6, 5, 8, 5, 4]
console.log(frequentUsedNumber(arr))
