// views 폴더 관련 설정 질문
// app.set과 app.use로 뷰 폴더 잡는 것의 차이

const express = require('express');
const app = express();
const PORT = 8080;

// view engine 설정
// app.set('view engine', 'ejs');

// case1. views 폴더 관련해 아무것도 안썼을 때
// express는 views 폴더명을 뷰 템플릿 폴더로 암묵적으로 간주
// (공식문서: https://expressjs.com/en/4x/api.html#app.set views property 의 default 확인)

// case2. app.set으로 뷰 템플릿 엔진 폴더 위치 지정
// app.set('views', './views'); // 뷰 폴더로 views/(default)
// app.set('views', './tests'); // 뷰 폴더로 tests/(test 폴더 내 index.ejs)

// case3. static 미들웨어로 views 설정시
// => ejs는 static 파일이 아님 (동적 파일). 따라서 아래와 같이 ejs 템플릿의 경우, static 미들웨어로 등록하는 것이 적절하지 않음.
// (좀 더 자세히 설명하면, 해당 코드가 에러를 일으키진 않으나 뷰 폴더로 views 폴더를 등록하진 않기에 app.set 디폴트 값으로 넘어가는 것임)
// views를 static 미들웨어로 등록해야하는 경우는 템플릿 엔진을 사용하지 않고 html(static file) 파일을 사용하는 경우!
// app.use('/views', express.static(__dirname + '/views')); // ** for html

// Routing (주소 설정)
app.get('/', function (req, res) {
  // res.render('index', { data: "Hello" }) // for ejs
  res.sendFile(__dirname + '/views/index.html'); // ** for html
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
