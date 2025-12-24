// 함수 == 기능 == 여러 코드들의 집합


// 1. 출력 기능/함수
console.log("안녕하세요")

alert("환영합니다")

document.write("<h3> 안녕하세요</h3>")


document.querySelector("h3").innerHTML ="안녕하세요2"

// 2. 입력 기능/함수
let 반환값1 =confirm(); // 확인 true 취소 false 버튼 제공 알림
let 반환값2 =prompt(); // 입력창 제공, 사용자가 입력한 값이 변수에 저장된다 
let 반환값3 = 3+2

document.querySelector("h3").innerHTML = 반환값2
반환값3 =document.querySelector("h3").innerHTML
console.log(반환값3)

//흐름 1 html <- js <- java <- db
//흐름 2 html -> js -> java -> db