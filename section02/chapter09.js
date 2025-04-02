// 5가지의 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: " 박용규", hobby: "테니스" },
  { name: " 홍길동", hobby: "독서" },
  { name: " 김영자", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);

// 2. map
// q배열읠 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 원본 배열을 정렬

//오름차순 정렬
let arr3 = ["10", "3", "5"];
arr3.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return 1; // => b , a 배치
  } else if (a < b) {
    //a가 비 앞에 와라
    return -1; // a, b 배치
  } else {
    return 0; // a, b 자리를 그대로 유지
  }
});

//내림차순 정렬
let arr4 = ["10", "3", "5"];
arr3.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return -1; // => a, b 배치
  } else if (a < b) {
    //a가 비 앞에 와라
    return 1; // b, a 배치
  } else {
    return 0; // a, b 자리를 그대로 유지
  }
});

console.log(arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
// 구분자를 바꿔주고 싶다면 join("구분자")를 넣어주면 된다.

let arr6 = ["hi", "im", "wintedlood"];
const joined = arr6.join("-");
