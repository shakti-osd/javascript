// 1) Reverse the string like "siht si gnikrow enif rof eht nevig gnirts"
let str = "this is working fine for the given string";
let splitStr = str.split(" ");
let newList = [];
splitStr.forEach((item) => {
  newList.push(item.split("").reverse().join(""));
});
console.log(newList.join(" "));

// 2) create a * Pyramid till 5 rows
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Reverse * Pyramid till 5 rows
let n2 = 5;
let string2 = "";
for (let i = 0; i < n2; i++) {
  for (let j = 0; j < i; j++) {
    string2 += " ";
  }
  for (let k = 1; k < 2 * (n2 - i); k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);

// * Bar
let num = 10;
let str2 = "";
for (let i = 0; i < num; i++) {
  for (let j = 0; j < 5; j++) {
    str2 += " ";
  }
  for (let k = 0; k < 5; k++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);

/*
Promise: It is an object that returns the result of eventual completion of an async operation.

Promise.all : It returns the result in array if all promises are settled.If any promise rejects or failed it returns the error instantly.It doesn't wait for 
              other promises.

Promise.allSettled : Similar to Promise.all, but it waits for all promises to be settled first, any promise fail or success and returns the result in array.

Promise.race : It returns the first settled promise, either it succeed or failed. 
Promise.any : It returns the first success promise result. 

  */
