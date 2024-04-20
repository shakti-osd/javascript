const arr = [5, 7, 9, 11, 15, 17]
const number = 2 // AP : Airthmatic Progress
//output =13

function findMissingOddNumeber(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    let next = arr[i] + number
    //if(!arr.includes(next)) return next;
    if (arr[i + 1] !== next) return next
  }
}
console.log(findMissingOddNumeber(arr, number))
