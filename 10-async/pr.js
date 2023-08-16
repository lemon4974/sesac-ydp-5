// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log('back');
//     cb('back');
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb('callback hell');
//   }, 1000);
// }

// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는 ' + message);
//     });
//   });
// });

// 실습 1. callback to promise

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

// call('kim', function (name) {})
//   .then(function (name) {
//     console.log(name + ' 반가워');
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + ' 을 실행했구나');
//     return hell();
//   })
//   .then(function (message) {
//     console.log('여기는 ' + message);
//   });

//실습 2. promise to async/await

async function exec() {
  let user = await call('kim');
  console.log(user + '반가워');
  let txt = await back();
  console.log(txt + ' 을 실행했구나');
  let message = await hell();
  console.log('여기는 ' + message);
}

exec();
