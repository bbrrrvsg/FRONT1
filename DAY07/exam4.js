// for 중첩 : for 안에 for 

// 2단 구구단 
for(let i = 1; i<=9; i++){
    console.log(`2x${i} = ${2*i}`)
}

// 2단~9단 

for(let i = 2; i<=9; i++){
    for(let j = 1; j<=9; j++){
        console.log(`${i}x${j}=${i*j}`)
    }
}

// 별출력

// *
// **
// ***
// ****
// *****

for(let i= 1; i<=5; i++){
    let output = ""
    for(let j =1; j<=i; j++){
        output+= "*"
    }
    console.log(output)
}

let output = ""
for(let i= 1; i<=5; i++){
    for(let j =1; j<=i; j++){
        output+= "*"
    }
    output += '\n';
}
console.log(output)


// 반복문과 자주 사용되는 키워드 
// 1. continue

for(let i=1; i<=5; i++){
    if(i ==3){
        continue
    }
    console.log(i) // 1245
}


// 2. break
for(let i = 1; i<=5; i++){
    if(i==3){break}
    console.log(i)
}// 12 


// for( ; ; ){} , while(true){} :  무한루프
