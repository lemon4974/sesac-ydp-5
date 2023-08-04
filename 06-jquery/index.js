// jQuery
// $(선택자).동작함수()
// $(): HTML 요소를 선택하는 함수
// 동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($('#div1'));

function submitJs() {
  // 요소 선택
  const div1 = document.getElementById('div1');
  // const div1 = document.querySelector('#div1');

  //div 내용을 변경
  div1.innerText = '반갑습니다!';

  //div border style
  div1.setAttribute('style', 'border: 2px solid red;');
  // <a> 태그의 링크 변경, <img> 태그의 그림 변경에 쓰임
}

function submitJquery() {
  const div1 = $('#div1');
  $('#div1').text('안녕히계세요~');
  $('#div1').css('border', '2px dotted blue');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

// 유사 배열 형태로 출력
console.log(colorsJs); //nodelist
console.log(colorsJquery); //jquery 객체

// js li 요소 클릭시 글씨 색상 빨간색
// colorsJs.forEach((item) => {
//   item.addEventListener('click', function () {
//     // console.log(this) // 자기자신 (item)
//     item.style.color = 'red';
//   });
// });
// forEach 사용 안한 경우 => Error: 유사 객체에 이벤트리스너를 추가하려고 했기 때문!
// 각 요소에 대해 이벤트리스너를 추가해야 하므로 반복해야함~

colorsJs[0].addEventListener('click', () => {
  colorsJs[0].style.color = 'red';
  // (위와의 차이점)유사 배열 같은 경우 반복을 통해 각각의 특성을 개별로 적용해야함
});

// jquery li 요소 클릭시 배경 색상 하늘색
// on 은 addEventListener와 같은 역할
colorsJquery.on('click', function () {
  console.log($(this));
  $(this).css('background-color', 'skyblue');
  // (js 와의 차이점) 어떤 반복의 적용 없이도 개별로 적용 잘됨
  // (js 와의 차이점) background-color에서 보이듯이 camelCase 사용 안함.
});

// 화살표 함수에서는 this의 처리가 다르다!! why? > 나중에
