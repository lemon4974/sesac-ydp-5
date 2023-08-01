let nameInput = document.getElementById('name');
let mInput = document.getElementById('message');
let table = document.getElementById('table');
let num = 1;
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDay();
let hours = new Date().getHours();
let mins = new Date().getMinutes();
let time = `${year}-${month}-${day} ${hours}:${mins}`;
// console.log(time);
let write = document.getElementById('write');
write.addEventListener('click', function () {
  let name = nameInput.value;
  let m = mInput.value;
  // console.log(name, m);
  // table에 칸 생성
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  let tdvalue1 = num;
  let tdvalue2 = name;
  let tdvalue3 = m;
  let tdvalue4 = time;
  //table에 (시각적) 칸추가
  table.append(tr);
  tr.append(td1, td2, td3, td4);
  //생성된 칸에 값
  td1.innerHTML = tdvalue1;
  td2.innerHTML = tdvalue2;
  td3.innerHTML = tdvalue3;
  td4.innerHTML = tdvalue4;
  //입력된 후 작성자, 내용 칸 초기화
  document.querySelector('#name').value = '';
  document.querySelector('#message').value = '';
  num++;
});
