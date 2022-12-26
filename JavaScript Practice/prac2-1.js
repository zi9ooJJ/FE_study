const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
rl.on("line", function (x) {
    // 공백 기준으로 입력 받기. parseInt로 숫자형으로 변환.
    arr = x.split(' ').map(n => parseInt(n));
    rl.close();
}).on("close", function () {
    let num = arr[0];
    let radix = arr[1];
    let result = (num.toString(radix));
    console.log(result);
    process.exit();
});

/* toString을 통한 진수 변환
toString()은 선택적으로 기수(radix)를 매개변수로 취한다. 기수의 값은 2부터 36까지.
기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있다. */