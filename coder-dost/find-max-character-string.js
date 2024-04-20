const string = "This is Javascript code and you need to find max char"

function maxDuplicateString(string) {
  let newString = string.split(" ").join("").toLowerCase()
  let arr = newString.split("")
  let obj = {}

  arr.forEach((item) => {
    if (obj.hasOwnProperty(item)) obj[item]++
    else obj[item] = 1
  })
  console.log(obj)

  let result = Object.keys(obj).reduce((item, next) =>
    obj[item] > obj[next] ? item : next
  )

  return [result, obj[result]]
}
console.log(maxDuplicateString(string))
