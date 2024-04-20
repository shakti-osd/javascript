/*
Debounce is a powerful technique used to optimize event handling by delaying the execution of a function until after a specified period of inactivity. 
It helps prevent excessive function calls triggered by rapid events, such as keystrokes or scroll movements.

*/

const getData = (e) => {
  const data = document.querySelector("#search").value;
  console.log("Data", data);
};

const debaunce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    console.log("args", args, context);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const searchUser = debaunce(getData, 500);
