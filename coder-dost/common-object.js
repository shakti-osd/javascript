const obj1 = { a: 1, b: 2, c: 3, d: 10, e: 11 }
const obj2 = { b: 2, c: 3, e: 11, f: 15 }

function commonObj(obj1, obj2) {
  let obj = {}
  for (let item in obj1) {
    if (obj1[item] === obj2[item]) {
      obj[item] = obj1[item]
    }
  }
  return obj
}

console.log(commonObj(obj1, obj2))
