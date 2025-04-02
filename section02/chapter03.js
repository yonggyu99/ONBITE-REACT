//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//=> 귀찮다 => 구조분해 할당
// let [one, two, three] = arr;

//=> 2개만 받아오고 싶다
// let [one, two] = arr;

//=> 4개를 받아오고 싶다 => four의 값은 undefined
// let [one, two, three, four] = arr;
// //값을 지정 가능
// let [one, two, three, four = 4] = arr;


//2. 객체의 구조 분해 할당
let person = {
    name : "박용규",
    age : 28,
    hobby : "게임",
};

let{ name, age, hobby} = person;

//3. 객체 부조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, age, hoibby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);
// => 주의할 점 : 객체를 넘겨주어야만 쓸 수 있음! , 중괄호를 사용하여 구조분해 할당임을 알려줘야 함.