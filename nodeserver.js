//노드에서는 다른 모듈을 가져올때 require를 사용

const express = require('express');

//웹 서버를 생성할 수 있는 인스턴스를 생성
const app = express();

//포트 설정(1024 번까지는 예약된 포트)
//80 번은 http의 기본포트, 443번은 https 의 기본포트
app.set('port', 4000);
let num = 1;
//사용자의 요청 처리
app.get("/session", (req, res) => {
   
    //내용을 화면에 출력
    res.send("num:" + num);
    num = num + 1;
})
//서버를 실행시켜서 사용자의 요청을 처리
app.listen(app.get('port'), () =>{
    console.log("서버 대기중");
});
