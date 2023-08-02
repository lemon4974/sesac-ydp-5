// console.log(document); //js
// console.log($(document)); //jquery

// // 1. load Event
// // in js
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('문서의 dom 트리가 완성되면 실행되는 이벤트~');
// });

// $(document).ready(function () {
//   console.log('ready - 문서 dom 트리가 완성되면 실행되는 이벤트~');
// });

// $(function () {
//   console.log('안녕?');
// });

// => 3 가지 다 같은 방식

// 2. Mouse Event
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// $('.num').click(function () {
//   //   $('.num').css('color', 'blue');
//   $(this).css('color', 'blue');
//   //   자기자신만 이벤트가 적용됨
// });

// $('.num').on('click', function () {
//   $(this).css('color', 'blue');
// });

//click in js
// const nums = document.querySelectorAll('.num');
// // console.log('nums', nums);
// for (let num of nums) {
//   // console.log('num', num);
//   num.addEventListener('click', function () {
//     console.log(this); //자기 자신 = 현재 클릭된 요소
//     this.style.color = 'blue';
//   });
// }

// mouseover(): 요소에 마우스 올렸을 때
// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

// hover(): 마우스 올리고/뗐을 때
// (차이점) 기본 구조 mouseover + mouseout 형태
// $('.div-hover').hover(
//     function(){
// 마우스 올릴 때 이벤트
//     },
//     function(){
// 마우스 뗐을 때 이벤트
//     }
// )
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );
// $('.div-hover').hover(function () {
//   $(this).toggleClass('hover');
// });

// scroll()
// 윈도우 창을 스크롤 할 때
// in jquery
// $(window).scroll(function () {
//   console.log('scrolling!!');
// });

// $(window).on(scroll, function () {
//   console.log('scrolling!!');
// });

// //in js
// window.addEventListener('scroll', function () {
//   console.log('scrolling with js!!');
// });

// 3. Key Event
// $('.input-key').on('keydown', function (e) {
//   // 이벤트 객체
//   console.log(e);
//   console.log(e.code); // 눌려진 키의 고유 코드
//   console.log(e.key); // input에 입력된 값

//   if (e.code === 'ArrowUp') {
//     console.log('⬆');
//   } else if (e.code === 'ArrowDown') {
//     console.log('⬇');
//   } else {
//     console.log('others');
//   }
// });

$('#todo-form').on('submit', function (e) {
  console.log(e); // 이벤트 객체
  e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
  // 지금 발생한 이벤트가 "submit"이기 때문에 submit 이벤트의 기본 동작인 "새로고침"을 막음
  // 발생하는 이벤트를 막는 과정을 알아야 함.

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
  //   console.log($('input'));
  const todo = $('input[name="todo"]').val();
  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
  $('.todos').append('<li>' + todo + '</li>');
  //   $('.todos').append(`<li>'${todo}</li>`);
  // 3. name 속성값이 todo인 요소의 value 초기화
  $('[name="todo"]').val('');
  //   is not a function 의 error 가 뜨면 함수 부붐의 typeof 찍어보기
  //   console.log(todo, typeof todo);
  // 또는 변수 따로 설정 const element = $("[name='todo']");
});

// e.preventDefault() 또 다른 예제
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a 태그의 기본 동작 막음
  // a 태그의 클릭이벤트에대해서 기본 동작은
  // href 에 연결되어 있는 링크로의 이동
  $('#text').append('이 링크는 동작하지 않음!');
});

//this
// 글 함수가 속해 있던 객체를 참조
//- 뭔가를 클릭할 때 불러오는 함수 (콜백함수)에서 this는 그 "뭔가"를 의미
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  //   btn.addEventListener('click', function () {
  //     console.log(this);
  //     this.style.backgroundColor = 'royalblue';
  //   });
  //   btn.addEventListener('click', setBgColor);
  btn.addEventListener('click', function () {
    setBgColor2(this, 'purple');
  });
}

for (let span of spans) {
  //   span.addEventListener('click', function () {
  //     console.log(this);
  //     this.style.backgroundColor = 'royalblue';
  //   });
  //   span.addEventListener('click', setBgColor);
  span.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}
