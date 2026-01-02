console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요'); // 복붙 5번 

// 반복되는 코드 . 반복되지 않는 코드

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); // 복붙

// 반복 수가 늘어나면 코드도 같이 늘어난다. 비효율적

// 반복되는 코드 : console.log(?); 
// 반복되지 않은 코드 : 1 2 3 4 5
// 반복되지 않은 코드의 패턴 찾기 : 1부터 5까지 1씩 증가 

// 초기값 :1 , 조건문 : 5까지 , 증감식 : 1씩 , 반복코드 console.log();

for(let i = 1; i<=5; i++){
    console.log(i);
}

// sum+=1;
// sum+=2;
// sum+=3;
// sum+=4;
// sum+=5;

let sum=0;
for(let k = 1; k<=5; k++){
    sum+=k;
}

for(let N = 1; N<=9; N++){
    console.log(`2x${N} = ${2*N}`);
}

// let numList =[];
// let num1 = prompt('정수1')
// numList.push(num1);
// let num2 = prompt('정수2')
// numList.push(num2);
// let num3 = prompt('정수3')
// numList.push(num3);

let numList =[];
for(let j = 1; j<=3; j++){
    let num = prompt(`정수${j}`);
    numList.push(num);
}
console.log(numList);