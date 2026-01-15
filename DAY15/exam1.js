

//[1] 서로 다른 js 파일에서 변수/함수 사용 가능여부  
// HTML 에서 여러개 js 파일 호출 했을떄 
console.log(var1) // 다른 text1.js 에서 선언된 변수 사용가능

func1(); // 함수도 가능 



//[2] Js는 html에 종속된 관계라서 F5(새로고침) 초기화(변수재생성)

// 백엔드 필요 하다. 백엔드 없이 영구저장? 가능 
// 자동 로그인 , 검색기록 , 비회원제 장바구니 , 최근본제품 등 쿠키 

// 웹스토리지 : 브라우져 --> f12 -> [application/응용프로그램] 탭 --> 사이드바 메뉴 
//      로컬저장소 / 세션 저장소 

// 종류 
// 1. ssesionStorage : 세션저장소를 관리하는 객체
//          *서로 다른 HTML간의 자료 공유안한다.
//          *모든 브라주어가 종료되면 자동삭제

// 2. localStorage : 로컬 저장소를 관리하는 객체
//          *서로 다른 HTML간의 자료 공유한다. <도메인(http주소) 동일>
//          *모든 브라우저가 종료 되더라도 자료 유지 <사용자가 직접 삭제>

// 주요기능
// 1. .setItem('key' , value);  : 세션/로컬 저장소에 속성/자료 추가
// 2. .getItem('key')           : 세션/로컬 저장소에 'key'에 해당하는 자료 호출 
// 3. .removeItem('key')        : 세션/로컬 저장소에 'key' 삭제 (value도 같이 삭제됨)
//      .clear();               : 모든 키 삭제 
// 4. JSON 변환 : 세션/로컬 저장소는 문자열 저장이 가능하다.
//  1] JSON.stringfy() : js 객체 -> json 문자열
//  2] JSON.parse() : JSON문자열 --> js 객체





console.log(sessionStorage)
console.log(localStorage)



// (1) 저장
sessionStorage.setItem('name' , '유재석')// f12 -> application 챕에서 확인가능
localStorage.setItem('age' , 40) // f12 -> application 챕에서 확인가능


// (2) 호출
console.log(sessionStorage.getItem('name')) // 세션저장소에 저장된 'name'키를 갖는 값 호출
console.log(localStorage.getItem('age')) 


// (3) 삭제
sessionStorage.removeItem('name'); 
localStorage.removeItem('age')


//(4) 활용 : 복잡한 (샘플) 데이터 
//          * 세션/로컬 저장소는 문자열 만 저장이 가능하다 * 배열/객체 -> 문자열로 변환  ****json : 자바스크립트 객체 기반의 문자열 형식 ****


sessionStorage.setItem('회원목록', JSON.stringify([{'name': '유재석' , 'age' : 40},{'name': '강호동' , 'age' : 40}]));

console.log(JSON.parse(sessionStorage.getItem('회원목록')))













