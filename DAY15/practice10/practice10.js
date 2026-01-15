

function signup(){
    const id = document.querySelector('.id').value;
    const pw = document.querySelector('.pw').value;
    
    let memberList = localStorage.getItem("memberList");
    if(memberList == null){
        memberList =[]
    }
    else{
        memberList = JSON.parse(memberList)
    }

    let no = memberList.length>=1 ? memberList[memberList.length-1].no+1 : 1 

    const obj =
    {
        'no' : no,
        'id' : id,
        'pw' : pw
    } // 속성명과 속성변수명이 같으면 생략가능
    // obj ={no , id , pw }
    memberList.push(obj)
    localStorage.setItem('memberList',JSON.stringify(memberList));

    alert('회원가입완료')
}


function login(){
    const id = document.querySelector('.id1').value;
    const pw = document.querySelector('.pw1').value;

    let memberList = localStorage.getItem("memberList");
    if(memberList == null){
        memberList =[]
    }
    else{
        memberList = JSON.parse(memberList)
    }
    for(index=0; index<memberList.length; index++){
        let List = memberList[index];
        if(List.id == id && List.pw == pw ){
            alert('로그인 성공'); return;
        }

     

    }
 alert('로그인 실패'); return;
}