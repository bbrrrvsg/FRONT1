let time = parseInt(prompt('시간 초 입력'));

let 초 = parseInt((time % 3600) %60)

let 분 = parseInt((time % 3600) /60);

let 시 = parseInt(time/3600);

result1 = 시 <10 ? "0"+시 : 시
result2 = 분 <10 ? "0"+분 : 분
result3 = 초 <10 ? "0"+초 : 초

console.log(`${result1}:${result2}:${result3}`)
