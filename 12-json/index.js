// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;
console.log(car);

// JSON.parse(): json to js obj(역직렬화)
const obj = JSON.parse(car);
console.group(obj); //js obj

// obj는 js object이므로,. [] 연산자를 이용해서 키 값에 접근 가능
console.log(obj.model);
console.log(obj.company);
console.log(obj.price);
console.log(obj.wow);

// JSON.stringify(); js obj to json(직렬화)
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json변수는 JSON 형태의 문자열이므로, [] 연산자를 이용해 키 값 접근 불가능
