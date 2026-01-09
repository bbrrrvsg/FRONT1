let board = ['', '', '', '', '', '', '', '', '']

let currentplayer = 'X'


for (let i = 0; i < board.length; i++) {

    //턴교체
    if (i % 2 !== 0) {
        currentplayer = 'O'
    }
    else {
        currentplayer - 'X'
    }
    let 입력 = prompt('칸 번호를 입력하세요 0~8');
    // 입력값 검증
    if (입력 < 0 && 입력 > 8) {
        console.log('잘못된 위치입니다.')
    }

    // 자리 중복 검사
    if (board[입력] != '') {
        console.log('이미 선택된 자리입니다')
    }
    else {//정상 입력일 경우
        board[입력] = currentplayer
    }
}

// 승리조건
const vict=[0,1,2],[3,4,5],



