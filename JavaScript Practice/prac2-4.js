const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (x) {
    input = x;
    rl.close();
}).on("close", function () {
    // '-'을 기준으로 나누고 숫자열로 변환 후 변수에 저장
    const [y, m ,d] = input.split('-').map(n => Number(n));
    // 윤년 구하기
    const leapYear = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    // 월별 일수 정리 (indexOf: 배열 내 지정된 요소가 존재하지 않으면 -1을 반환)
    const day31 = [1, 3, 5, 7, 8, 10, 12].indexOf(m) !== -1;
    const day30 = [4, 6, 9, 11].indexOf(m) !== -1;
    // 2월 포함해서 날짜 구하는 함수
    const day29 = leapYear;
    const getDay = (() => {
        if (day31) return 31;
        if (day30) return 30;
        if (day29) return 29;
        return 28;
    })();
    // 연,월,일 참인 조건 정리
    const realYear = y >= 2000 && y <= 2099;
    const realMonth = m >= 1 && m <= 12;
    const realDay = d >= 1 && d <= getDay;

    if (realYear && realMonth && realDay) 
        console.log(1);
    else console.log(0);
    process.exit();
});