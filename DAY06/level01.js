let accountNumberList = ['111-222', '333-444', '555-666'];
let balanceList = [50000, 120000, 30000];

let 계좌번호 = prompt('계번');
let 출금금액 = parseInt(prompt('출금'));

let indexf = accountNumberList.indexOf(계좌번호)
let 잔액 = balanceList[indexf];
if (indexf != -1) {
    if (출금금액 < 10000) {
        console.log('출금이 작음')}

        else if (출금금액 % 10000 >= 1) {
            console.log('출금단위오류')
        }
        else if (출금금액 + 1200 > 잔액) {
            console.log('잔액부족')
        }else{ console.log('출금완료')}
    
}
else { console.log('없음') }