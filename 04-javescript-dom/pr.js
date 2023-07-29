document.addEventListener('DOMContentLoaded', function () {
  // 모든 값이 로드된 후 script 실행
  // input 값을 받아 변수에 넣기
  var v1Input = document.getElementById('value1');
  var v2Input = document.getElementById('value2');
  var hInput = document.getElementById('happen');
  var result = document.getElementById('result');

  var sum = document.getElementById('sum');
  var reset = document.getElementById('reset');
  sum.addEventListener('click', function (e) {
    var value1 = parseInt(v1Input.value);
    var value2 = parseInt(v2Input.value);
    v2Input;
    //   const v1Input = (document.getElementById('value1').value = 값);
    console.log(v1Input);
    console.log(v2Input);

    //   console.log(todoInput.value); // input에 입력된 값

    //사칙 연산....
    //   const r =

    if (hInput.value == '+') {
      result.value = value1 + value2;
    } else if (hInput == '-') {
      result.value = value1 - value2;
    } else if (hInput == '*') {
      result.value = value1 * value2;
    } else if (hInput == '/') {
      result.value = value1 / value2;
    }
  });

  reset.addEventListener('click', function (e) {
    v1Input.value = '';
    v2Input.value = '';
    hInput.value = '';
    result.value = '';
  });
});
