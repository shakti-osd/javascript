const string = "This is Javascript code"

function reverseWord(string) {
  let arr = string.split(" ")
  let result = []
  for (let item of arr) {
    let reverse = item.split("").reverse().join("")
    result.push(reverse)
  }
  return result.join(" ")
}
console.log(reverseWord(string))
