//1.숫자
100 //숫자형
console.log(100); // 1. 소괄호 안에서 부터 읽는다

console.log(typeof 150); // typeof 연산자 : 피연산자의 데이터 타입을 문자열로 반환

console.log(typeof 3.37); // 컴퓨터는 소수점 모른다  < 부동 소수점 >

// 2. 문자 
console.log("안녕") //큰따옴표 가능
console.log('안녕') //작은따옴표도 가능
console.log(`안녕`) //백틱(템플릿 리터럴)도 가능

//4. 이스케이프(제어) 문자
console.log("\\안녕1") // \\일떄 \하나만 출력
console.log("\'안녕2") //작은따옴표 출력
console.log("\"안녕3") //큰따옴표 출력
console.log("\n안녕4") //줄바꿈
console.log("\t안녕5") //탭 간격

// 5. 템플릿 리터럴

let 키 = 170;
console.log("나의 키 : " + 키) // 문자 + 숫자 = 문자
console.log(`나의 키 : ${키}`) // 백틱 써야함

//문자열은 배열(여러개 묶음)이다 

console.log("안녕하세요".length) //문자열 길이(문자개수) 반환
console.log("안녕하세요"[0]) //문자열 인덱스 접근

// 6. 논리 / 제어문 자주사용

console.log(true) //참
console.log(false) //거짓

// 7. 특수
let var1; //선언만 하고 값 할당 안함
console.log(var1) //undefined : 값이 할당되지 않음

let var2 = null; //값이 없음
console.log(var2) //null : 값이 없음

//5. 배열 : 여러개 자료들을 순서 대로 저장하는 자료

let ary1 = ['봄', '여름', '가을', '겨울']
// let ary1 : 변수명 (선언 / 만들기)
// = : 오른쪽 자료를 왼쪽에 넣기
// '봄', '여름', '가을', '겨울' : 배열 자료 (4개의 문자 자료 묶음)
//[] : 배열

//6. 인덱스 : 배열내 저장된 순서 번호 0번시작 중간에 삭제되도 당겨진다

console.log(ary1[0]) //0번 인덱스 : '봄'
console.log(ary1[1]) //1번 인덱스 : '여름'
console.log(ary1[2]) //2번 인덱스 : '가을'
console.log(ary1[3]) //3번 인덱스 : '겨울'
console.log(ary1[4]) //4번 인덱스 : undefined 

//7. 배열내 자료(요소) 수정 : 변수명[수정할 인덱스] = 수정할 값

ary1[2] = 'fall'; //2번 인덱스 '가을' -> 'fall' 수정

//8. 배열내 자료 추가 : 변수명.push(추가할 값) , 마지막 인덱스 뒤로 

ary1.push('봄봄'); //마지막 인덱스 뒤로 '봄봄' 추가

// ; 세미콜론이란? : 한 문장의 명령어 마침 뜻
// 한줄의 문장이 하나면 생략 가능 vs 한줄에 두문장이면 ; 세미콜론 필수

// 배열내 자료 삭제 : 변수명.splice(삭제 시작 인덱스, 삭제할 개수)

ary1.splice(1, 2); //1번 인덱스부터 2개 삭제 (여름, fall)
console.log(ary1);
// 9. 배열내 자료 삽입 : 변수명.splice(삽입 시작 인덱스, 0, 삽입할 값1, 삽입할 값2, ...)

ary1.splice(1, 0, 'spring', 'summer'); //1번 인덱스부터 0개 삭제 후 'spring', 'summer' 삽입
console.log(ary1);

// 10.  배열내 요소 찾기 : 변수명.indexOf(찾을 값) -> 찾은 값의 인덱스 반환, 없으면 -1 반환

console.log(ary1.indexOf('winter'));
console.log(ary1.indexOf('가을'));

// 11. 배열내 요소 총 갯수 : 변수명.length
console.log(ary1.length);


// 형변환 다른 프로그래밍/환경 통신가의 데이터 변한 다수 발생
let input = prompt("숫자입력") //문자열로 입력받음

console,log(typeof input) //문자열

input = input * 1 //곱하기 연산자 사용시 숫자로 형변환
console.log(typeof input) //숫자형
input = number(input) //Number() 함수 사용시 숫자로 형변환
console.log(typeof input) //숫자형

console.log(number("100"))
console.log(parseInt("100"))
console.log(parseFloat("3.14"))
console.log(String(100))
console,log(100+"")
console.log(Boolean("true")) 






