//math 모듈

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
//   a;
// }

// common json module로 내보내는 방법
// module.exports = {
//   add,
//   sub,
// };

//Es module로 내보내기
// export { add, sub };

// 더 간편하게 내보내기

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
  a;
}

//하나의 모듈을 대표하는 default 값을 내보내는 방법법
export default function multiply(a, b) {
  return a * b;
}
