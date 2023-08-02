// val() - value

// 같은 동작을 하는 js & jquery
function getValue() {
  //js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);
  //   input에 넣은 값을 alert로 출력

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  //   document.querySelector('input').value = '하이하이~';

  //   jquery
  $('input').val('안뇽안뇽~');
}

//css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
  //   안녕 1만 red 로 변경
}

function changeCssJquery() {
  // case 1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case 2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', //모든 span 에 대해 폰트 크기 변경
    color: 'blue', //모든 span 에 대해 색상 변경
    // 안녕1, 안녕 2 모두 blue로 변경
  });
}

function getCssJquery() {
  console.log(document.querySelector('span').style.color); //js
  //   console.log($('span').css('color')); //jquery
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  a.setAttribute('href', 'https://www.naver.com/');
  a.href = 'https://www.naver.com/';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const ptext = document.querySelector('.p-text');
  ptext.textContent = '임의의 값';
  //   ptext.innerText = 'js로 텍스트 변경!!';
  //   ptext.innerHtml = 'js로 텍스트 변경!!'; > 태그 인식해서 바꿔줌
}
function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const phtml = document.querySelector('.p-html');
  phtml.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
  //   자식으로 요소를 추가함
}

// 요소 추가하기
// append()
// 참고 onclick으로 설정해놓았기에 함수가 실행됨
function appendJS() {
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append

  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const p = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  p.innerText = '마지막 자식으로 추가된 js';
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  colors.append(p);
  console.log(document.querySelector('.colors'));
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
  // 문자열의 형태로 tag요소까지 넣어서 작성해주면 ok
}

// prepend()
function prependJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  const colors = document.querySelector('.colors');
  const p = document.createElement('li');
  p.innerText = '첫 자식으로 추가된 js';
  colors.prepend(p);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

//before
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  green.before(li);
}

function beforeJquery() {
  $('.green').before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  green.after(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>'
  );
}

// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  const li2 = document.querySelector('#li2');
  li2.remove();
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 num 클래스를 갖는 요소를 선택 후
  const ul = document.querySelector('ul.nums');
  //   ul.nums 형식 기억하기
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)
  ul.innerText = '';
}

function emptyJquery() {
  $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  //   const child2 = document.querySelector('.child2');
  //   console.log(child2.parentNode);
  console.log(document.querySelector('.child2').parentElement);
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  //   const child2 = document.querySelector('.child2');
  //   console.log(child2.nextElementSibling);

  console.log(document.querySelector('.child2').nextElementSibling);
  console.log($('.child2').next());
}

function findPrev() {
  //   const child2 = document.querySelector('.child2');
  //   console.log(child2.previousElementSibling);
  // child2 클래스 갖는 요소의 이전 형제 요소

  console.log(document.querySelector('.child2').previousElementSibling);
  console.log($('.child2').prev());
}

function findChildren() {
  //   const parent = document.querySelector('.parent');
  //   console.log(parent.children);

  onsole.log(document.querySelector('.parent').children);
  console.log($('.parent').children());
  // parent 클래스 갖는 요소의 자식 요소
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   const hi = document.querySelector('#hi');
  //   hi.classList.add('fs-50');

  document.querySelector('#hi').classList.add('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  const hi = document.querySelector('#hi');
  hi.classList.remove('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  const hi = document.querySelector('#hi');
  hi.classList.contains('fs-50');
  console.log(hi.classList.contains('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  const hi = document.querySelector('#hi');
  hi.classList.toggle('bg-pink');
}
