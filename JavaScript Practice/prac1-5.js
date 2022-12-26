const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (x) {
  input.push(x)
  if (input[0] == input.length - 1) {
    rl.close();
  }
}).on("close", function () {

    input.forEach( text => {
        for (let i = 1; i < text.length; i++) {
            // 문자열을 아스키코드로 변환. A-Z : 65-90
            if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) {
                console.log(text.slice(i)); // i번째 인덱스부터 슬라이싱.
            }
          }  
    })
  process.exit();
});

