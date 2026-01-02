let enter_t = parseInt(prompt("시간(hour) 을 입력하세요 : "))
let enter_m = parseInt(prompt("분(minute) 을 입력하세요 : "))

let 입차시간 = enter_m + (enter_t*60)


let outter_t = prompt("시간(hour) 을 입력하세요 : ")
let outter_m = prompt("분(minute) 을 입력하세요 : ")

let 출차시간 = outter_m + (outter_t*60)

let 이용시간 = 출차시간 - 입차시간 - 30; 




let 금액 = parseInt(2000 + ((이용시간/10)*500))

 result1 = 입차시간 > 1320 ? parseInt(금액 * 0.8) : 금액 

 result2 = result1 >20000 ? 20000 : result1

 console.log(result2)




