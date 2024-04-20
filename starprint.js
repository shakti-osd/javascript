//1) Pyramid * pattern

let n = 5;
let string = "";

for(let i=1; i<= n; i++){
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    for(let k=0; k < i*2-1; k++){
        string += "*";
    }
    string += "<br>";
}
document.write(`<pre>${string}</pre>`);