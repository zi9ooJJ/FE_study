const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (x) {
  input.push(x);
  if(input[0] == input.length-1)
  rl.close();
}).on("close", function () {
  for(let i = 1; i < input.length; i++) {
      let firstChar = input[i].charAt(0);
      let others = input[i].slice(1);
      let output = firstChar.toUpperCase() + others.toLowerCase()
      console.log(output);
  }
  process.exit();
});
