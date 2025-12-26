/*
// 1. 산술 연산자 
console.log(10 + 3) //더하기 13
console.log(10 - 3) //빼기 7
console.log(10 * 3) //곱하기 30
console.log(10 / 3) //나누기 3.3333...
console.log(10 % 3) //나누기 나머지 1
console.log(parseInt(10 / 3)) //나누기 몫 3 

// 지문 1
let 국어 = Number(prompt("국어 점수 입력"))
let 영어 = Number(prompt("영어 점수 입력"))
let 수학 = Number(prompt("수학 점수 입력"))

let 총점 = 국어 + 영어 + 수학
let 평균 = 총점 / 3
console.log(`총점 : ${총점} , 평균 : ${평균}`)

// 지문 2

let radius = Number(prompt("반지름 입력"))
let area = 3.14 * radius * radius
console.log(`반지름이 ${radius}인 원의 넓이 : ${area}`)
*/

/*
// 지문 3
let 실수1 = Number(prompt("실수 입력"))
let 실수2 = Number(prompt("실수 입력"))

let pst = 실수1 / 실수2 * 100
console.log(`첫번째 실수는 두번째 실수의 ${pst}% 입니다.`)

// 비교연산자 : >초과 <미만 >= 이상 <= 이하 == 같다 != 같지않다 ===(결과타입)같다 !==(결과타입)같지않다
// 비교 결과는 true/false 

// 논리 연산자 : &&이면서(모두 참이여야 참) ||이거나(하나만 참이어도 참)
// ! : 부정 반대 notwhrjs , true -> false , false -> true

// 지문 4
let N = Number(prompt("정수 입력"))
if (N % 2 == 0) {
    console.log("false")
} else {
    console.log("true")
}

//지문5
let N1 = Number(prompt("정수 입력"))
if(N1 % 7 ==0) {
    console.log("true")
} else {
    console.log("false")
}

// 지문 6

let id = prompt("아이디 입력")
let pw = prompt("비밀번호 입력")

if(id == "admin" && pw == "1234") {
    console.log("true")
} else {
    console.log("false")
}

// 지문 7
let N2 = Number(prompt("정수 입력"))

if(N2 % 7 ==0 && N2 % 2 !=0) {
    console.log("true")
} else {
    console.log("false")
}
*/
/*
//지문8
let fscore = Number(prompt("1차 점수 입력"))
let sscore = Number(prompt("2차 점수 입력"))

let sum1 = fscore + sscore

if (sum1 >= 150) {
    document.querySelector("h3").innerHTML = "합격"
} else {
    document.querySelector("h3").innerHTML = "불합격"
}
*/
//지문9

let name1 = prompt("이름 입력")
let name2 = prompt("이름 입력")
let name3 = [name1, name2]

for(i=0; i<name3.length; i++){

    if(name3[i]=="유재석")
        {
            document.querySelector("ol").innerHTML += `<li>${name3[i]+'(방장)'}</li>`
        } else {
            document.querySelector("ol").innerHTML += `<li>${name3[i]}</li>`
        }

} 

