const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (x) {
  // input에 입력값이 두 줄로 들어와  배열의 길이가 2가 되면 입력 종료. 
  input.push(x);
  if (input.length === 2)
  rl.close();
}).on("close", function () {
    // 문자열 길이 값 변수에 저장.
    const textlen = input[0];
    // 입력된 문자열 변수에 저장.
    const regex = input[1];
    // 정규표현식으로 찾아서 배열로 반환 -> 배열의 길이로 count.
    // 대,소문자 또는 숫자가 문자열에 없다면 0을 반환해야 함. -> 삼항연산자(물음표함수) 이용
    const upCase = regex.match(/[A-Z]/g) ? regex.match(/[A-Z]/g).length : 0;
    const lowCase = regex.match(/[a-z]/g) ? regex.match(/[a-z]/g).length : 0;
    const numCase = regex.match(/[0-9]/g) ? regex.match(/[0-9]/g).length : 0;
    console.log(upCase, lowCase, numCase);
    process.exit();
});