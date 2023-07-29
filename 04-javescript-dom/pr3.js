let v1Input = document.getElementById('value1');
let v2Input = document.getElementById('value2');
let hInput = document.getElementById('happen');
let result = document.getElementById('result');

let cal = document.getElementById('calculate');
let reset = document.getElementById('reset');

cal.addEventListener('click', function () {
  let value1 = parseInt(v1Input.value);
  let value2 = parseInt(v2Input.value);
  let h = hInput.value;
  let r = result.value;

  if (h === '+') {
    result.value = value1 + value2;
    console.log(`${result.value} = ${value1} + ${value2}`);
  } else if (h === '-') {
    result.value = value1 - value2;
    console.log(`${result.value} = ${value1} - ${value2}`);
  } else if (h === '*') {
    result.value = value1 * value2;
    console.log(`${result.value} = ${value1} * ${value2}`);
  } else if (h === '/') {
    result.value = value1 / value2;
    console.log(`${result.value} = ${value1} / ${value2}`);
  }
});

reset.addEventListener('click', function () {
  v1Input.value = '';
  v2Input.value = '';
  hInput.value = '';
  result.value = '';
});
