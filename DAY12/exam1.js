// [1]함수 함(상자/공간/블럭) 수(숫자/코드/명령어)
// 누군가가 상자에 미리 넣어둔 숫자/코드
// 한번 넣어둔 숫자/코드를 재사용 예] 수학(공식) ,라이브러리 / API

// [2] 함수 정의/만들기 
function 내가만든힘수(){
    // 중괄호 안에 미리 정의할 코드/명령어 
    console.log('함수호출')
}


//[3] 함수 호출 하기

내가만든힘수();

//[4] 함수 종류 : 1. 내가만든 함수function  2. 남이만든함수 console.log ,alert


//[5] 예시 

function 믹서기(과일){
    let 주스 = 과일 + "주스";
    return 주스; 
}

let 컴 = 믹서기('사과');// 인자값 / 인수  -- (중매/연결)* -- 매개변수

let data = "딸기"

let 컵2 = 믹서기(data);

// 매개변수는 함수가 종료될 떄 사라짐 (지역변수 특징)

//[6] 매개변수 x , 반환 x 

function func1(){
    console.log("func1.exe")
}
func1();

// 매개변수 o , 반환 x , 대표적으로 console.log()

function func2(x,y){
    console.log("func2.exe");
}

// 매개변수 ㅇ , 반환 ㅇ , 대표적으로 prompt()

function func3(x,y){
    console.log("func3.exe")
    return x+y
}
let result1 = func3(2,5);
// 매개변수 x , 반환 ㅇ 



function func4(){
    console.log("func4.exe")
    return 10;
}
let result2 = func4();



// [7] 지역함수란 특정한 if/for/함수 {}안에서 선언한 (매개)변수는{}밖에서호출/사용 안한다.

let 전역변수 = "대한민국";
if(true){
    let 지역변수1 = "경기도";
    console.log(지역변수1)

    for(let i=0; i<1; i++){
        let 지역변수2 = "안양시"
        console.log(전역변수)
        console.log(지역변수1)
        console.log(지역변수2)
    }//안양시 끝
    
} // 경기도 끝
// console.log(지역변수1); // 지역변수1 is not defind
console.log(지역변수1)
console.log(지역변수2)
console.log(지역변수3)

function func5(지역변수3){
    let 지역변수4 = "수원시"
}
func5("안산시")



// [8] 함수호출 / 사용 하는 반법
// js에서 호출  : 함수명();
alert('js에서 실행')

//onclick 클릭할때 이벤트 발생 

/* <button onclick="alert('html에서 실행')">버튼</button> */

