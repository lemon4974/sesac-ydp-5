let nameInput = document.getElementById('name');
let mInput = document.getElementById('message');
let num = 5; // for 문?
let time = new Date();
// console.log(time);

let write = document.getElementById('write');

write.addEventListener('click', function () {
  let name = nameInput.value;
  let value2 = mInput.value;
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
