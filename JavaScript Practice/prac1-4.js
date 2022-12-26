const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linecount = 0;
let input = [];

rl.on("line", function (x) {
  input.push(x);
  linecount++;
  if (linecount === 3) {
    rl.close();
  }
}).on("close", function () {
  let test = input[1]
  let standard = input[2]
  let check = standard.indexOf(test.toString());

//   if (check !== -1) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }

  // if문 간단하게 물음표함수로 나타내기
  console.log(check !== -1 ? 1 : 0);

  process.exit();
});



// // indexOf를 활용하여 부분 문자열의 위치 검색.
// const testValue = "This is a Pen";
// const subValue = "Pen";

// const ivalue = testValue.indexOf(subValue);
// if (ivalue !== -1) {
//     console.log("찾았다")
// } else {
//     console.log("없다")
// }

// // toString() 활용하여 문자열로 바꿔 찾기
// var array = ['abc', 'def', 'ad'];

// // 검색하려는 문자
// var searchText = ['def'];

// // 검색하려는 문자가 있는 배열의 인덱스
// var index = array.indexOf(searchText.toString());

// var logText = '';
// if (index !== -1) {
//   logText = 'array[' + index + '] = ' + searchText
// } else {
//   logText = 'Can not found text in array !'
// }

// console.log(logText); // array[1] = def