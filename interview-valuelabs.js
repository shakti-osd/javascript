// 1) need output
var x = "20";
function func1(){
    var x = "5";
        alert(this.x); // 20
    function func2(){
        alert(x); // 5
    }
    func2(); 
}
func1();


// 2) need output
(function(){

  var a = b = 3;

})();
console.log((typeof a !== 'undefined'));  // false
console.log((typeof b !== 'undefined'));  // true

// 3) need output
var a = [];
var b = []
console.log(a == b); // false
console.log(a === b); // false


// 4) reverse string without inbuilt function
const string = "shakti kumar" // ""
let spiltString = string.split('')

let result = []
for(let i=spiltString.length; i>=0; i--){
  result.push(spiltString[i])
}
console.log(result.join(''))


// 5) Get duplicate array list
const arr = [11, 14, 16, 14, 15,18,23,24,15,24];
let check_duplicate_in_array = (input_array) => { 
    let duplicate_elements = []; 
    for (element of input_array) { 
      console.log('indexOf', input_array.indexOf(element))
      console.log('lastIndexOf', input_array.lastIndexOf(element))
        if (input_array.indexOf(element) 
            !== input_array.lastIndexOf(element)) { 
            duplicate_elements.push(element); 
        } 
    } 
    console.log('duplicate_elements',duplicate_elements)
    //let set = new Set(duplicate_elements)
    //return [...set];  
     return [...new Set(duplicate_elements)];
}; 
//let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1]; 
console.log(check_duplicate_in_array(arr));