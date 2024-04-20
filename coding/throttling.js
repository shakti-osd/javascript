/* 
-Throttling is used to call a function after a particular interval of time, only the first click is executed immediately.
-Without throttling, a function may be invoked rapidly, leading to performance issues, unnecessary resource consumption, 
and a potentially poor user experience.
*/


let counter = 0;
const getResizeData = () => {
    console.log('Data', counter++)
}

const throttling = function(fn, d){
    let flag=true
    return function (){
        let context = this, args = arguments;
        if(flag){
            fn.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            },d)
        }
    }
}

const resizeWindow = throttling(getResizeData,1000)

window.addEventListener("resize",resizeWindow)
