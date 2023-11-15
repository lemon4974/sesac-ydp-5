const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); //express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2, ...}

const socket = { id: 'aaa' };

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on(): socket 관련 통신 작업을 처리
io.on('connection', (socket, data) => {
  // connection은 기본 이벤트.
  // 이 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공
  console.log('서버 연결 완료 :: ', socket.id);
  nickObjs[socket.id] = 'nick';

  //   socket.emit('notice', (data) => {

  //         socket.emit('notice', ``);
  //       });

  //     console.log(`콘솔1 ${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: '서버hello', msg: '안녕!!' });
  //   });
  //   socket.id
  // - 소켓 고유 아이디 (브라우저 탭 단위)
  //   - 같은 주소로, 4개의 탭이 열렸다면 4개의 클라이언트 연결된 것.
  //  [실습 1]
  //   socket.on('hello', (data) => {
  //     console.log(`콘솔1 ${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: '서버hello', msg: '안녕!!' });
  //   });
  //   socket.on('study', (data) => {
  //     console.log(`콘솔2 ${data.who} : ${data.msg}`);
  //     socket.emit('studyKr', { who: '서버study', msg: '공부공부' });
  //   });
  //   socket.on('bye', (data) => {
  //     console.log(`콘솔2 ${data.who} : ${data.msg}`);
  //     socket.emit('byeKr', { who: '서버bye', msg: '잘 가' });
  //   });

  //   [실습 3] 채팅방 입장 안내 문구
  // io.emit('notice', `${socket.id}님이 입장하셨습니다. `);

  // [실습 3-2]
  //   emit() from server
  // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // - io.emit(event_name, data) : 서버에 접속한 모든 클라이언트 전송
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);
    // 프론트에서 입력한 nick 이 nickObjs 객체에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다.'
    // 새 닉네임; notice 이벤트 + ${nick} 님이 입장하셨습니다.
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      // 이미 존재하는 닉네임인 경우
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      // 새로운 닉네임이 있는 경우
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 :: ', nickObjs);
      io.emit('notice', `${nick} 님이 입장하셨습니다. `); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
      updateList();
    }
  });
  // [실습 3-3] 클라이언트 퇴장 시
  // 'notice' 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', socket.id);

    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
