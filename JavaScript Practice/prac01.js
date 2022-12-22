// readline을 이용하여 입력 받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 여러줄 입력 받을 때 lineCount를 0부터 1씩 더하여 3줄이 되면 입력종료.
let input = [];
let lineCount = 0;

rl.on("line", function (x) {
    lineCount++;
    // 첫번째 줄 : input[0], 두번째 줄 : input[1], 세번째 줄 : input[3]
    input.push(x); 
    if (lineCount === 3) {
        rl.close();
    }
}).on("close", function () {
    const cardNum = input[1].split(' '); // 카드에 적힌 숫자들을 쪼갬.
    const likeNum = input[2] // 좋아하는 숫자 카드 변수에 저장.
    // filter를 이용하여 cardNum을 순회하며 likeNum과 일치하는 값을 새로운 배열로 만들어 리턴한 후 배열의 길이로 카드의 수 count.
    let count = cardNum.filter(e => likeNum === e).length;
    console.log(count);
});