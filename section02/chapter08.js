// 5가지 요소 순회 및 탐색 메서드
// 1. forEach : 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes : 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
let isINclude = arr2.includes(3);

// 3. indexOf : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은 비교만 가능하다.(객체 프로퍼티는 찾아내지 못한다.)
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); //만약 같은 값이 여러개라면 가장 앞의 요소의 index를 반환, 만약 없는 값이라면 -1 반환
console.log(index);

// 4. findIndex : 모든 요소를 순회하면서,
// 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
// 객체의 특정 프로퍼티를 callBack 함수를 통해 찾아낼 수 있다.

let arr4 = [1, 2, 3];
arr4.findIndex((item) => {
  if (item % 2 !== 2) return true;
});

console.log(findIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환한다.

let arr5 = [{ name: "박용규" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "박용규");

console.log(finded);
