{} // 객체 선언

const obj1={};
console.log(obj1)//object

// 객체선언과 동시에 속성{속성명: 값} 정의/구성
// 3-1 속성명과 속성값은 하나의 쌍(엔트리) 이며 ,(쉼표)로 쌍 구분
// 3-2 속성명은 문자취급하며, 특수문자가 들어간 경우 "" or ''로 감싼다
// 3-3 속성명은 자료(속성값)을 식별하는 목적으로 동일한 객체내 중복 불가능하다.

let obj2 = {속성명1 : 10 , 속성명2 : "hello"};

// [4] 객체호출,   . (접근/도트 연산자)이란? 앞에있는 항의 주소값(위치/포인터)으로 이동

console.log(obj2);
console.log(obj2.속성명1)
// obj2. : obj2로 이동해라 , obj2.속성명1 : obj2로이동해서 속성명1 호출해라 

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

// [5] 객체 속성(엔트리)추가 , 객체변수명.새로운속성명 = 값
obj2.속성명3 = true;
console.log(obj2)

// [6] 객체 속성(엔트리)수정 , 객체변수명.새로운속성명 = 새로운 값, 주의할점 : 수정할 속송명이 존재하지 안으면 추가


obj2.속성명3 = false;
console.log(obj2)


// [7] 객체 속성(엔트리)삭제 , delete 객체변수명.속성명
delete obj2.속성명3
console.log(obj2)

// [8] 객체 속성 내 자료는 모든 자료형(타입) 가능하다 
let obj3 = {a : 1   , b : "안녕" , c : true , d : [1,2], e : {ee:2 ,ff:'dd'} };

// [9]in 연산자 , '찾을 속성명' in 객체변수명 , 해당 객체 내 속성이 있는지 확인 (true/false)
console.log('f' in obj3) // false
console.log('a' in obj3) // true

