const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = "";
rl.on("line", function (x) {
  num = parseInt(x); 
  rl.close();
}).on("close", function () {
    let arr = [];
    // 1부터 주어진 수(num)까지 반복해가며 나머지가 0인 값을 구함.
    for (let n = 1; n <= num; n++) { 
        if (num % n === 0) { 
            arr.push(n);
        }
    }
    console.log(arr.length);
    arr.forEach(n => console.log(n));
    process.exit();
});