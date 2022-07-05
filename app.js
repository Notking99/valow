const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
//서버에 포트 설정
const app = express();
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

//로그 기록
app.use(morgan('dev'));
//정적 파일 제공을 위한 코드
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {// /를 주소 GET 요청으로 받으면 업로드(메인화면) 파일을 보낸다
    res.sendFile(path.join(__dirname, 'main.html'));
  });

app.get('/split', (req, res) => {// /를 주소 GET 요청으로 받으면 업로드(메인화면) 파일을 보낸다
    res.sendFile(path.join(__dirname, 'split.html'));
  });


app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.send('Error');
  });

  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
  });
