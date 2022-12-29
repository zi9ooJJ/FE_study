const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (x) {
  input.push(x);
  if (Number(input[0]) === input.length - 1) {
    rl.close();
  }
}).on("close", function () {
    // 계산할 숫자만 변수에 저장
    const [_, ...rest] = input;
    // rest 공백 기준 앞,뒤 숫자 쪼개기 -> 각각 쪼개기 -> 뒤집고 -> 다시 합침
    rest.forEach(num => {
      newNum = num.split(' ').map(n => n.split('').reverse().join('')); 
    // newNum 숫자열로 변환 후 더하기
    const sum = parseInt(newNum[0]) + parseInt(newNum[1]);
    // sum을 다시 문자열로 변환 후 뒤집어서 출력
    const results = String(sum).split('').reverse().join('');
    console.log(results);
    }); 
    process.exit();
});
