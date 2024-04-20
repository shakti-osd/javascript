function secondLargest(nums) {
  let largest = nums[0]
  let secondLargest = nums[1] < largest ? nums[1] : largest

  for (let i of nums) {
    if (i > largest) {
      secondLargest = largest
      largest = i

      if (i > secondLargest && i < largest) {
        secondLargest = i
      }
    }
  }
  return secondLargest
}

const nums = [2, 3, 5, 6, 9, 7, 6, 2, 1, 8, 11, 9, 8]

console.log(secondLargest(nums))

//////////////////////////////////////

const secondLargest = (nums) => {
  let data = nums.sort((a, b) => b - a)
  let set = new Set(data)

  return [...set][1]
}
console.log(secondLargest(nums))
