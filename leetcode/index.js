// 2635. Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

var map = function(arr, fn) {
    let res=[]
    for(let index in arr){
        res.push(fn(arr[index], Number(index)))
    }
    return res
};


// 2634. Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/

var filter = function(arr, fn) {
    const res = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }
    return res
};


// 2626. Array Reduce Transformation
// https://leetcode.com/problems/array-reduce-transformation/

var reduce = function(nums, fn, init) {
    let res = init
    for(let n of nums){
        res = fn(res, n)
    }
    return res
};

// 2629. Function Composition
// https://leetcode.com/problems/function-composition/

var compose = function(functions) {
    
	return function(x) {
        for(let fn of functions.reverse()){
            x = fn(x)
        }
        return x
        
    }
};

